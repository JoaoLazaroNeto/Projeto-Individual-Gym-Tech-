var treinoModel = require("../models/treinoModel");

function buscarPornome(req, res) {
  var nome = req.query.nome;

  treinoModel.buscarPornome(nome).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  treinoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  treinoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nome;
  var descricao = req.body.descricao;

  treinoModel.buscarPornome(nome).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o nome ${nome} já existe` });
    } else {
      treinoModel.cadastrar(descricao, nome).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPornome,
  buscarPorId,
  cadastrar,
  listar,
};
