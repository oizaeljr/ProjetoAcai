var database = require("../database/config")

function listarProdutos() {
    
    var instrucaoSql = `SELECT * FROM produtos;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarProdutos
};