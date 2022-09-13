/* 
express - framework que auxilia nas rotas dos processos
app - instancia o express para aplicação
dotenv - biblioteca que auxilia na segurança de alguns dados
mongoose - banco de dados não relacional MongoDB
authRoute - chama as funcoes de rotas das requisições, criada em rotas auth.js
userRoute - chama as funcoes de rotas das requisições, criada em rotas users.js
postRoute - chama as funcoes de rotas das requisições, criada em rotas posts.js
categoryRoute - chama as funcoes de rotas das requisições, criada em rotas categories.js
multer - biblioteca que intermedia a entrada de arquivos para o sistema
*/
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require("multer")

/*
express.json - Faz com que os dados para requisicao e de resposta seja em formato json 
*/
app.use(express.json())

/*
app.use('/' - Define a rota e a funcao que recebe qnd ela e acessada
req - valor abriga a requisicao do cliente ao servidor
res - valor abriga a resposta do servidor para o cliente
*/

/*
Codigo base de rotas
app.use('/', (req, res) => {
    console.log('Acessado a Página Inicial') 
    res.send('Pagina Inicial')
})
*/

/*
Chamando a funcoa config, que possibilita puxar dados criados
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
Apos importar multer, se define o local de armazenamento de dados
importnado o arquivo pelo seu nome dentro do local destinado.

storage - variavel que instancia a estrutura de upload com multer
    destination - 'rota' de destino - nome da pasta
    filename - config do salvamento do arquivo, no caso, define o nome do arquivo
*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

/* 
Define a rota que faca o upload do arquivo 
*/
const upload = multer({storage: storage})
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('Arquivo carregado com sucesso')
})

/*
Agora as rotas definidas em auth.js
rota base - api/ - as rotas de sua respectiva funcao  
*/
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

/* 
PORT - Define o valor da Porta das requisições
LINK_APP - Link do APP para visualização pelo navegador
app.listen - Liga o Servidor utilizando a Porta e funcao de mostrar o Link
*/
const PORT = 5000
const LINK_APP = `http://localhost:${PORT}`
app.listen(PORT, ()=> {
    console.log(`NodeJS:: Server Conectado:: Link: ${LINK_APP}`)
})
