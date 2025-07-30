CREATE DATABASE ProjetoAcai;
USE ProjetoAcai;

-- Cria a tabela
CREATE TABLE produtos (
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nomeProduto VARCHAR(40) NOT NULL,
    quantidadeProduto INT DEFAULT 0,
    tamanhoProduto VARCHAR(30),
    precoProduto DOUBLE,
    statusProduto VARCHAR(30),
    CONSTRAINT chk_statusProduto CHECK (statusProduto IN('Disponível', 'Em falta', 'Desligado'))
);

-- Trigger para validar status permitido no INSERT
DELIMITER $$

CREATE TRIGGER trg_set_status_before_insert
BEFORE INSERT ON produtos
FOR EACH ROW
BEGIN
    IF NEW.quantidadeProduto = 0 THEN
        SET NEW.statusProduto = 'Em falta';
    ELSE
        SET NEW.statusProduto = 'Disponível';
    END IF;
END$$

-- Trigger para definir 'Em falta' automaticamente no UPDATE se quantidade for 0
CREATE TRIGGER trg_set_status_before_update
BEFORE UPDATE ON produtos
FOR EACH ROW
BEGIN
    IF NEW.quantidadeProduto = 0 THEN
        SET NEW.statusProduto = 'Em falta';
    ELSE
        SET NEW.statusProduto = 'Disponível';
    END IF;
END$$

DELIMITER ;

CREATE TABLE Pedidos (
idPedido INT PRIMARY KEY AUTO_INCREMENT,
dataPedido DATETIME DEFAULT CURRENT_TIMESTAMP,
tipoPagamento VARCHAR(10) NOT NULL,
CONSTRAINT chk_tipoPagamento CHECK (tipoPagamento IN ('Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Pix'))
) AUTO_INCREMENT = 1000;

CREATE TABLE itemPedido (
    idPedido INT,
    idProduto INT,
    quantidade INT DEFAULT 1,
    PRIMARY KEY (idPedido, idProduto),
    FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
    FOREIGN KEY (idProduto) REFERENCES produtos(idProduto)
);

-- Inserindo produtos
INSERT INTO produtos (nomeProduto, precoProduto) VALUES
('Açaí Tradicional 500ml', 12.99),
('Açaí com Banana 300ml', 10.50),
('Pastel de Queijo', 6.00),
('Pastel de Carne', 6.50);

-- Inserindo pedidos
INSERT INTO pedidos (tipoPagamento) VALUES
('Pix'),
('Dinheiro');

-- Relacionando produtos com pedidos
-- Pedido #1 (João): 2 Açaís Tradicionais, 1 Pastel de Queijo
-- Pedido #2 (Maria): 1 Açaí com Banana, 2 Pastéis de Carne
INSERT INTO itemPedido (idPedido, idProduto, quantidade) VALUES
(1000, 1, 2),  -- 2 Açaís Tradicionais
(1000, 3, 1),   -- 1 Pastel de Queijo
(1001, 2, 1),  -- 1 Açaí com Banana
(1001, 4, 2);   -- 2 Pastéis de Carne

SELECT 
    p.nomeProduto,
    i.quantidade,
    p.precoProduto,
    (i.quantidade * p.precoProduto) AS totalItem
FROM itemPedido i
JOIN produtos p ON i.idProduto = p.idProduto
WHERE i.idPedido = 1000;

SELECT 
    idPedido,
    SUM(quantidade * precoProduto) AS totalPedido
FROM itemPedido i JOIN produtos p ON p.idProduto = i.idProduto
GROUP BY idPedido;


