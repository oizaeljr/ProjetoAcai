CREATE DATABASE atletacristo;

USE atletacristo;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
dtNasc date,
esporteFav varchar(45),
esporteNivel varchar(45),
esporteAnos varchar(45),
esporteGrau varchar(45),
cristao char(3),
cristaoAnos varchar(45),
biblia char(3),
frase varchar(45),
dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
pontosQuiz int
);

CREATE TABLE tarefa (
idTarefa int primary key auto_increment,
textoTarefa varchar(45),
statsTarefa varchar(45),
fkUsuario int,
constraint fkUsuarioTarefa foreign key (fkUsuario) references usuario (idUsuario) 
);

CREATE TABLE versiculo (
idVersiculo int primary key auto_increment,
textoVersiculo varchar(255),
livro varchar(45)
);

INSERT INTO versiculo (textoVersiculo, livro) VALUES
('Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.', 'Josué 1:9'),
('Tudo posso naquele que me fortalece.', 'Filipenses 4:13'),
('Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.', 'Isaías 41:10'),
('O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?', 'Salmos 27:1'),
('Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?', 'Romanos 8:31'),
('Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.', 'Provérbios 3:5-6'),
('Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.', 'Salmos 46:1'),
('Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa deles, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.', 'Deuteronômio 31:6'),
('De todos os lados somos pressionados, mas não desanimados; ficamos perplexos, mas não desesperados; somos perseguidos, mas não abandonados; abatidos, mas não destruídos.', '2 Coríntios 4:8-9'),
('Mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.', 'Isaías 40:31');

INSERT INTO usuario (idusuario, nome, email, senha, dtNasc, cristao, cristaoAnos, frase, dtCriacao, biblia, pontosQuiz, esporteFav, esporteNivel, esporteAnos, esporteGrau) VALUES
(default, 'João Silva', 'joao.silva@gmail.com', '@Izael123', '1990-01-15', 'Sim', 10, 'Viver é Cristo', '2024-01-01', 'Sim', 100, 'Futebol', 'Profissional', 'menos de 1 ano', 'Baixo'),
(default, 'Maria Santos', 'maria.santos@gmail.com', '@Izael123', '1985-03-22', 'Sim', 15, 'Seguir em frente sempre', '2024-01-02', 'Sim', 120, 'Vôlei', 'Profissional', 'menos de 1 ano', 'Baixo'),
(default, 'Carlos Lima', 'carlos.lima@gmail.com', '@Izael123', '2000-07-10', 'Sim', 5, 'Paz e fé', '2024-01-03', 'Sim', 80, 'Basquete', 'Diversão', 'até 5 anos', 'Baixo'),
(default, 'Ana Costa', 'ana.costa@gmail.com', '@Izael123', '1995-11-18', 'Sim', 8, 'Amar é o caminho', '2024-01-04', 'Não', 140, 'Vôlei', 'Diversão', 'até 5 anos', 'Médio'),
(default, 'Pedro Oliveira', 'pedro.oliveira@gmail.com', '@Izael123', '1988-02-27', 'Sim', 20, 'Nunca desista', '2024-01-05', 'Não', 60, 'Basquete', 'Amador', 'até 5 anos', 'Médio'),
(default, 'Julia Ribeiro', 'julia.ribeiro@gmail.com', '@Izael123', '1992-09-05', 'Sim', 12, 'Crescendo na fé', '2024-01-06', 'Não', 75, 'Tênis', 'Profissional', 'mais de 5 anos', 'Médio'),
(default, 'Bruno Marques', 'bruno.marques@gmail.com', '@Izael123', '1998-12-20', 'Não', 6, 'A fé move montanhas', '2024-01-07', 'Não', 90, 'Futebol', 'Amador', 'mais de 5 anos', 'Médio'),
(default, 'Fernanda Lima', 'fernanda.lima@gmail.com', '@Izael123', '1996-06-12', 'Não', 10, 'A graça de Deus é suficiente', '2024-01-08', 'Não', 110, 'Futebol', 'Profissional', 'mais de 5 anos', 'Alto'),
(default, 'Rafael Almeida', 'rafael.almeida@gmail.com', '@Izael123', '1993-03-18', 'Não', 8, 'A jornada é mais importante', '2024-01-09', 'Não', 95, 'Futebol', 'Amador', 'mais de 5 anos', 'Alto'),
(default, 'Patrícia Souza', 'patricia.souza@gmail.com', '@Izael123', '1987-04-14', 'Não', 18, 'Deus é minha fortaleza', '2024-01-10', 'Não', 130, 'Golfe', 'Diversão', 'menos de 1 ano', 'Alto'),
(default, 'Izael Junior', 'izael@gmail.com', '@Izael123', '2002-10-24', 'Sim', 10, 'Se Deus é por nós, quem será contra nós!', '2024-11-21', 'Sim', 250, 'Futebol', 'Profissional', 'mais de 5 anos', 'Alto');

SELECT * FROM usuario;
SELECT * FROM tarefa;
SELECT * FROM versiculo;


SELECT count(case when idUsuario = 6 THEN 1 END) AS posicao FROM usuario ORDER BY pontosQuiz DESC;

SELECT 
    idUsuario,
    RANK() OVER (ORDER BY pontosQuiz DESC) AS posicao
FROM usuario;



