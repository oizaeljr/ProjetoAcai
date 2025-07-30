var database = require("../database/config")

function listarProdutos() {
    
    var instrucaoSql = `SELECT * FROM produtos;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisaProdutos(nomeProduto) {
    
    var instrucaoSql = `SELECT * FROM produtos WHERE nomeProduto LIKE '%${nomeProduto}%';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarProdutos,
    pesquisaProdutos
};