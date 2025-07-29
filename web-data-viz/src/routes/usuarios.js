var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/atualizar/:id", function (req, res) {
    usuarioController.atualizar(req, res);
});

router.put("/pontuar/:id", function (req, res) {
    usuarioController.pontuar(req, res);
});

router.get("/cristao", function (req, res) {
    usuarioController.cristao(req, res);
});

router.get("/biblia", function (req, res) {
    usuarioController.biblia(req, res);
});

router.get("/esportesFavoritos", function (req, res) {
    usuarioController.esportesFavoritos(req, res);
});

router.get("/esportesNivel", function (req, res) {
    usuarioController.esportesNivel(req, res);
});

router.get("/esportesGrau", function (req, res) {
    usuarioController.esportesGrau(req, res);
});

router.get("/posicao", function (req, res) {
    usuarioController.posicao(req, res);
});

module.exports = router;