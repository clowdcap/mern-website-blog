/* 
Chama a biblioteca do MongoDB 
*/
const mongoose = require('mongoose')

/*
Criando a tabela do banco de dados
Schema, apatir de uma classe, criar uma variavel
criando a estrutura de dados em um json
criando as "colunas" como ... 
*/
const PostSchema = new mongoose.Schema({
    
        title: {
            type: String,
            required: true,
            unique: true
        },

        description: {
            type: String,
            required: true,
        },
  
        photo: {
            type: String,
            required: false,
        },
        
        username: {
            type: String,
            required: true
        },

        categories: {
            type: Array,
            required: false
        }

    }, {timestamps: true}
)

/* 
Função nativa Js de autorizar a exportar esses dados
gerando um model - modelo de dado, em parametros o nome da "tabela" - no caso Schema
Post - e definir qual esturutra de dados utilizar, no caso, a criada acima.
*/
module.exports = mongoose.model("Post", PostSchema)