function listarProdutos() {
    fetch(`/estoques/listarProdutos`, {
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

                var listaEstoque = document.getElementById('listaEstoque');

                listaEstoque.innerHTML = ""

                for (var i = 0; i < json.length; i++) {
                    if (json[i].quantidadeProduto > 0) {
                        listaEstoque.innerHTML += `
                            <div class="item-produto">
                                <div class="info-produto">
                                    <span><strong>Nome do Produto:</strong> ${json[i].nomeProduto}</span>
                                    <span><strong>Quantidade:</strong> ${json[i].quantidadeProduto}</span>
                                    <span><strong>Tamanho:</strong> ${json[i].tamanhoProduto}</span>
                                    <span><strong>Preço Unitário (R$):</strong> ${json[i].precoProduto}</span>
                                </div>
                                <div class="botoes-produto">
                                    <button class="editar">Editar</button>
                                    <button class="remover">Remover</button>
                                </div>
                            </div>
                            `
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