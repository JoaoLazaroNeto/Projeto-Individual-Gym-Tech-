var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    treinoController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    treinoController.buscarPornome(req, res);
});

router.get("/buscar/:id", function (req, res) {
  treinoController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  treinoController.listar(req, res);
});

module.exports = router;