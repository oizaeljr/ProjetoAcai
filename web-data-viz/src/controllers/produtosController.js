var produtosModel = require("../models/produtosModel");

function listarProdutos(req, res) {
    produtosModel.listarProdutos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os objetivos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pesquisaProdutos(req, res) {
    var nomeProduto = req.params.nomeProduto;
    produtosModel.pesquisaProdutos(nomeProduto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os objetivos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarProdutos,
    pesquisaProdutos
}