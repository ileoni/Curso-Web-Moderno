DESC empresas

ALTER TABLE empresas MODIFY cnpj VARCHAR(14)

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 1231151241231),
    ('Vale', 31231231221412),
    ('Cielo', 31512412422)

SELECT * FROM empresas
SELECT * FROM cidades

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

SELECT * FROM empresas_unidades