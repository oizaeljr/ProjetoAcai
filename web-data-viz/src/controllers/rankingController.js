var rankingModel = require("../models/rankingModel");

function listar(req, res) {


        rankingModel.listar()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    return res.json(resultadoAutenticar);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o listar! Erro: ", erro.sqlMessage);
                    return res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    listar
};
