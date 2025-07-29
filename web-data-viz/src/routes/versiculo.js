var express = require("express");
var router = express.Router();

var versiculoController = require("../controllers/versiculoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/exibirVersiculo", function (req, res) {
    versiculoController.exibirVersiculo(req, res);
})

module.exports = router;