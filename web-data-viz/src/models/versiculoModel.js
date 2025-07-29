var database = require("../database/config");

function exibirVersiculo() {
  var instrucaoSql = `SELECT * FROM versiculo;`;

  return database.executar(instrucaoSql);
}

module.exports = { exibirVersiculo };
