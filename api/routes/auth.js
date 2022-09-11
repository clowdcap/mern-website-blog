/*
Agora, sera feito o gerenciamento dos bancos de dados com as rotas
API - definindo rotas para certas areas a serem acessadas pelo banco de dados
Router - Traz a funcao de rotas http

User, Post, Caregory - chama os Schemas "tabelas" e com essas estruturas de dados
criadas, podemos chamalas para essa aplicação
*/
router = require('express').Router()
User = require('../models/User')
Post = require('./../models/Post')
Category = require('./../models/Category')

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
       newUser = new User({
            username: req.body.username,        
            email: req.body.email,
            password: req.body.password,
       })
       user = await newUser.save()
       res.status(user) 
       
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error)
    }
}) 


module.exports = router