
//fazendo a configuração com o banco de dados mysql

module.exports = {
    host : "localhost",
    dialect : "mysql",
    username : "root",
    password : "",
    database : "usuario_mern",
    define:{
        timestamps: true,
        underscored: true,
    },
};