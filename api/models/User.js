/* 
chama a biblioteca do mongo db 
*/
mongoose = require('mongoose')

/*
Criando a tabela do banco de dados
Schema, apatir de uma classe, criar uma variavel
criando a estrutura de dados em um json
criando as "colunas" como username, email, password e profilePic 
*/
UserSchema = new mongoose.Schema({
    
        username: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        profilePic: {
            type: String,
            default: ""
        },

    }, {timestamps: true}
)

/* 
Função nativa Js de autorizar a exportar esses dados
gerando um model - modelo de dado, em parametros o nome da "tabela" - no caso Schema
User - e definir qual esturutra de dados utilizar, no caso, a criada acima.
*/
module.exports = mongoose.model("User", UserSchema)