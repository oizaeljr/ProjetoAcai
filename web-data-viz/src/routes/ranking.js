var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listar", function (req, res) {
    rankingController.listar(req, res);
})

module.exports = router;