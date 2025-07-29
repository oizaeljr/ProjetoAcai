var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha, dtNasc, esporteFav, esporteNivel, esporteAnos, esporteGrau, cristao, cristaoAnos, biblia, frase, dtCriacao, pontosQuiz FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function atualizar(id, dtNasc, esporteFav, esporteNivel, esporteAnos, esporteGrau, cristao, cristaoAnos, biblia, frase) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", esporteFav, esporteNivel, esporteAnos, esporteGrau, cristao, cristaoAnos, biblia, frase);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        UPDATE usuario SET dtNasc = '${dtNasc}', esporteFav = '${esporteFav}', esporteNivel = '${esporteNivel}', esporteAnos = '${esporteAnos}', esporteGrau = '${esporteGrau}', cristao = '${cristao}', cristaoAnos = '${cristaoAnos}', biblia = '${biblia}', frase = '${frase}' WHERE idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuar(id, pontos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontos);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        UPDATE usuario SET pontosQuiz = IFNULL(pontosQuiz, 0) + ${pontos} WHERE idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cristao() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cristao()");
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS total_usuarios,  
            COUNT(CASE WHEN cristao = 'sim' THEN 1 END) AS total_cristao 
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function biblia() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function biblia()");
    var instrucaoSql = `
        SELECT COUNT(CASE WHEN biblia = 'sim' THEN 1 END) AS total_leram FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function esportesFavoritos() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function esportesFavoritos()");
    var instrucaoSql = `
        SELECT 
	        COUNT(CASE WHEN esporteFav = 'Futebol' THEN 1 END) AS total_futebol,
	        COUNT(CASE WHEN esporteFav = 'Vôlei' THEN 1 END) AS total_volei, 
	        COUNT(CASE WHEN esporteFav = 'Basquete' THEN 1 END) AS total_basquete, 
	        COUNT(CASE WHEN esporteFav = 'Tênis' THEN 1 END) AS total_tenis, 
	        COUNT(CASE WHEN esporteFav = 'Golfe' THEN 1 END) AS total_golfe 
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function esportesNivel() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function esportesNivel()");
    var instrucaoSql = `
        SELECT 
	        COUNT(CASE WHEN esporteNivel = 'Profissional' THEN 1 END) AS total_profissional,
	        COUNT(CASE WHEN esporteNivel= 'Amador' THEN 1 END) AS total_amador, 
	        COUNT(CASE WHEN esporteNivel = 'Diversão' THEN 1 END) AS total_diversao
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function esportesGrau() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function esportesGrau()");
    var instrucaoSql = `
        SELECT 
	        COUNT(CASE WHEN esporteGrau = 'Baixo' THEN 1 END) AS total_baixo,
	        COUNT(CASE WHEN esporteGrau = 'Médio' THEN 1 END) AS total_medio, 
	        COUNT(CASE WHEN esporteGrau = 'Alto' THEN 1 END) AS total_alto
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function posicao() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function posicao()");
    var instrucaoSql = `
        SELECT 
            idUsuario,
            RANK() OVER (ORDER BY pontosQuiz DESC) AS posicao
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
};