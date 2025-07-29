var versiculoModel = require("../models/versiculoModel");

function exibirVersiculo(req, res) {
    

        versiculoModel.exibirVersiculo()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    return res.json(resultadoAutenticar);

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o exibirVersiculo! Erro: ", erro.sqlMessage);
                    return res.status(500).json(erro.sqlMessage);
                }
            );
    };

module.exports = {
    exibirVersiculo
};
