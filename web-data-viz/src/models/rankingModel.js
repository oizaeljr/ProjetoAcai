var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT nome, pontosQuiz FROM usuario ORDER BY pontosQuiz DESC LIMIT 3;`;

  return database.executar(instrucaoSql);
}

module.exports = { listar };
