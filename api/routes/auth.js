/*
Agora, sera feito o gerenciamento dos bancos de dados com as rotas
API - definindo rotas para certas areas a serem acessadas pelo banco de dados
Router - Traz a funcao de rotas http

User, Post, Caregory - chama os Schemas "tabelas" e com essas estruturas de dados
criadas, podemos chamalas para essa aplicação

bcrypt - biblioteca que auxiliara nas criptografia das senhas
*/
const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// CRIAR USER
/*
Definir rotas para Registro
    get - requisicao para pegar os dados do servidor
    post - requisição para postar / colocar / depositar / entregar dados ao servidor
    put - requisição para atualizar dados do servidor
    delete - requisição para deletar dados no servidor

    funcao - apos defida, definir a rota, no caso /registrar
    ex: http::/localhost:${PORT}/registrar
    quando acessado esse link, acessara a as funcoes definidas logo apos
    com o req e res podemos trabalhar esses dados como objetos
    e fazer o que for preciso como no exemplo apresetnado, como registrar
    dados requisitados pelo cliente ao servidor, salvando esse registro no server

    async - define que a função a seguir é assincrona, ou seja, as demais atividades programadas
    nao sera definida por um tempo de intervalo para serem executadas, e sim, ao esperar a requisição
    efeturar e confirmar 100% do procedimento, ai sim as outras funções iram funcionar

    dentro da funcao que ira acontecer caso o endereço seja acessado, sera feito uma tentativa try
    onde caso der erro, nos avise
    
    sobre criptografia
        salt - define o tamanho da senha criptografada
        hashedPass - pega a senha que vai ser criptografada

    tente
        instancia um novo usuario apartir da estrutura de dados defina, recebendo os dados da requisição
            Resumo: req.body
                pegando username, email e password
                
        await - define que sera solidado a criacai do usuario apos o usuario a funcao tiver ja concluida
        save - apos esperar, salva a os dados na estrutura no banco de dados
        me passe status 200 e me apresenta os dados criados
    
    caso der erro
        me avise o erro
        me passe status 500
*/
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,        
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save()
        res.status(200).json(user)
       
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error)
    }
}) 

// LOGIN USER
/* 
Definir rotas para Login

Da mesma forma apresentada nos Registros
Tera uma rota, para login, onde sera feita a conferencia de dados
o cliente encaminha seus dados para o servidor, onde sera feita essa conferencia
e dependendo do resultado da comparação de dados, retornara dados diferentes
se caso a comparação der OK (tudo igual) me dara um aprovado, caso constrario
me retornara erro.
*/
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("username incorreto!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Password incorreto!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router