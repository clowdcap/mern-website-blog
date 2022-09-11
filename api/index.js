/* 
express - framework que auxilia nas rotas dos processos
app - instancia o express para aplicação
dotenv - biblioteca que auxilia na segurança de alguns dados
mongoose - banco de dados não relacional MongoDB
authRoute - chama as funcoes de rotas das requisições, criada em rotas auth.js
*/
express = require('express')
app = express()
dotenv = require('dotenv')
mongoose = require('mongoose')
authRoute = require('./routes/auth')


/*
express.json - Faz com que os dados para requisicao e de resposta seja em formato json 
*/
app.use(express.json())

/*
app.use('/' - Define a rota e a funcao que recebe qnd ela e acessada
req - valor abriga a requisicao do cliente ao servidor
res - valor abriga a resposta do servidor para o cliente

app.use('/', (req, res) => {
    console.log('Acessado a Página Inicial') 
    res.send('Pagina Inicial')
})
*/

/*
Agora as rotas definidas em auth.js
rota geral e as rotas
*/
app.use('/api/auth', authRoute)

/*
chamando a funcoa config, que possibilita puxar dados criados
no aruqivo .env
onde fica armazenado dados que nao podem ser mostrados ao client
*/
dotenv.config()

/*
mongoose.connect - Conectando ao banco de dados MongoDB
process.env.MONGO_URL - Busca o valor armazenado no .env com o a variavel MONGO_URL
then - apos concluir o processamento da conexao, confirma o mesmo
catch - caso der algum erro, avisar mensagem de erro 
*/
mongoose.connect(process.env.MONGO_URL)
.then(console.log("MongoDB:: Banco de Dados Conectado:: Status={200}"))
.catch((erro) => console.log(erro))

/* 
PORT - Define o valor da Porta das requisições
LINK_APP - Link do APP para visualização pelo navegador
app.listen - Liga o Servidor utilizando a Porta e funcao de mostrar o Link
*/
PORT = 5000
LINK_APP = `http://localhost:${PORT}`
app.listen(PORT, ()=> {
    console.log(`NodeJS:: Server Conectado:: Link: ${LINK_APP}`)
})

