var express = require("express");
var router = express.Router();

var produtosController = require("../controllers/produtosController");

router.get("/listarProdutos", function (req, res) {
    produtosController.listarProdutos(req, res);
}) 

module.exports = router;