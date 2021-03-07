const Sequelize = require('sequelize');

//vamos pega nossa configuração do nosso confi/database.js
const dbConfig = require("../config/database");

const User = require('../models/User')
const Product = require('../models/Product')


//fazer a conexao com o banco de dados e testa
const connection = new Sequelize(dbConfig);


try{
    // se tudo ok 
    connection.authenticate();
    console.log("Connection has been established successfully");
    // se houver error
}catch(error){
    console.log("Unable to connection the not established falid", error);
}

User.init(connection);
Product.init(connection);

module.exports = connection;