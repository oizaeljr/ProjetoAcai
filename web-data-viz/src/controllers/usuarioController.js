var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            dtNasc: resultadoAutenticar[0].dtNasc,
                            esporteFav: resultadoAutenticar[0].esporteFav,
                            esporteNivel: resultadoAutenticar[0].esporteNivel,
                            esporteAnos: resultadoAutenticar[0].esporteAnos,
                            esporteGrau: resultadoAutenticar[0].esporteGrau,
                            cristao: resultadoAutenticar[0].cristao,
                            cristaoAnos: resultadoAutenticar[0].cristaoAnos,
                            biblia: resultadoAutenticar[0].biblia,
                            frase: resultadoAutenticar[0].frase,
                            dtCriacao: resultadoAutenticar[0].dtCriacao,
                            pontosQuiz: resultadoAutenticar[0].pontosQuiz
                        });


                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
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

function atualizar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var dtNasc = req.body.dtNascServer;
    var esporteFav = req.body.esporteFavServer;
    var esporteNivel = req.body.esporteNivelServer;
    var esporteAnos = req.body.esporteAnosServer;
    var esporteGrau = req.body.esporteGrauServer;
    var cristao = req.body.cristaoServer;
    var cristaoAnos = req.body.cristaoAnosServer;
    var biblia = req.body.bibliaServer;
    var frase = req.body.fraseServer;

    console.log(esporteFav)

    // Faça as validações dos valores
    if (esporteFav == '#') {

    } else if (esporteNivel == '#') {

    } else if (esporteAnos == '#') {

    } else if (esporteGrau == '#') {

    } else if (cristao == '#') {

    } else if (cristaoAnos < 0) {

    } else if (biblia == '#') {

    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizar(id, dtNasc, esporteFav, esporteNivel, esporteAnos, esporteGrau, cristao, cristaoAnos, biblia, frase)
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


function pontuar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var pontos = req.body.pontosServer;


    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.pontuar(id, pontos)
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

function cristao(req, res) {
    
    usuarioModel.cristao().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cristaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function biblia(req, res) {

    usuarioModel.biblia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cristaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function esportesFavoritos(req, res) {

    usuarioModel.esportesFavoritos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cristaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function esportesNivel(req, res) {

    usuarioModel.esportesNivel().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cristaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function esportesGrau(req, res) {

    usuarioModel.esportesGrau().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cristaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function posicao(req, res) {

    usuarioModel.posicao().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cristaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    pontuar,
    cristao,
    biblia,
    esportesFavoritos,
    esportesNivel,
    esportesGrau,
    posicao
}