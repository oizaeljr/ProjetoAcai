var anotacoesModel = require("../models/anotacoesModel");


function inserirTarefas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tarefa = req.body.textoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    // Faça as validações dos valores
    if (tarefa == undefined) {
        res.status(400).send("A tarefa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        anotacoesModel.inserirTarefas(tarefa, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    anotacoesModel.listar(idUsuario).then(function (resultado) {
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

function deletarTarefas(req, res) {
    var idTarefa = req.params.idTarefa;

    anotacoesModel.deletarTarefas(idTarefa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function completarTarefas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idTarefa = req.body.idTarefaServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    anotacoesModel.completarTarefas(idTarefa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function TarefasConcluidas(req, res) {
    var idUsuario = req.params.idUsuario;
    anotacoesModel.TarefasConcluidas(idUsuario).then(function (resultado) {
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
    inserirTarefas,
    listar,
    deletarTarefas,
    completarTarefas,
    TarefasConcluidas
}