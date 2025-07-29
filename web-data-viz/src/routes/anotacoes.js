var express = require("express");
var router = express.Router();

var anotacoesController = require("../controllers/anotacoesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/listar/:idUsuario", function (req, res) {
    anotacoesController.listar(req, res);
}) 
 
router.post("/inserirTarefas", function (req, res) {
    anotacoesController.inserirTarefas(req, res);
})

router.delete("/deletarTarefas/:idTarefa", function (req, res) {
    anotacoesController.deletarTarefas(req, res);
})

router.put("/completarTarefas/:idTarefa", function (req, res) {
    anotacoesController.completarTarefas(req, res);
})

router.get("/TarefasConcluidas/:idUsuario", function (req, res) {
    anotacoesController.TarefasConcluidas(req, res);
})


module.exports = router;