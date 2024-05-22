var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM treino WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM treino`;

  return database.executar(instrucaoSql);
}

function buscarPornome(nome) {
  var instrucaoSql = `SELECT * FROM treino WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(descricao, nome) {
  var instrucaoSql = `INSERT INTO treino (razao_social, nome) VALUES ('${descricao}', '${nome}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPornome, buscarPorId, cadastrar, listar };
