function listarProdutos() {
    fetch(`/produtos/listarProdutos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                console.log(json.length)

                var listaAcai = document.getElementById('listaAcai');
                var listaPastel = document.getElementById('listaPastel')

                for (var i = 0; i < json.length; i++) {
                    if (json[i].quantidadeProduto > 0) {

                        if (json[i].nomeProduto.toLowerCase().includes('açaí')) {
                            listaAcai.innerHTML += `
                            <div class="produto-card">
                            <span>${json[i].nomeProduto} ${json[i].tamanhoProduto}</span>
                            <div class="produto-imagemAcai"></div>
                            <p>Preço: R$${json[i].precoProduto}</p>
                            <p>Estoque: ${json[i].quantidadeProduto}</p>
                            <div class="quantidade">
                            <button class="menos">−</button>
                            <span class="contador">0</span>
                            <button class="mais">+</button>
                            </div>
                            </div>
                            `
                        } else if (json[i].nomeProduto.toLowerCase().includes('pastel')) {
                            listaPastel.innerHTML += `
                            <div class="produto-card">
                            <span>${json[i].nomeProduto} ${json[i].tamanhoProduto}</span>
                            <div class="produto-imagemPastel"></div>
                            <p>Preço: R$${json[i].precoProduto}</p>
                            <p>Estoque: ${json[i].quantidadeProduto}</p>
                            <div class="quantidade">
                            <button class="menos">−</button>
                            <span class="contador">0</span>
                            <button class="mais">+</button>
                            </div>
                            </div>
                        `
                        }
                    }
                }

            });

        } else {

            console.log("Houve um erro ao tentar realizar a listagem!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}