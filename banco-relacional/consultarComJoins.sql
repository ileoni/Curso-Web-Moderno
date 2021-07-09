SELECT * FROM prefeitos
SELECT * FROM cidades

SELECT * FROM cidades c
INNER JOIN prefeitos p
ON c.id = p.cidade_id

SELECT * FROM cidades c
LEFT JOIN prefeitos p
-- LEFT OUTER JOIN prefeitos p
ON c.id = p.cidade_id;

SELECT * FROM cidades c
RIGHT JOIN prefeitos p
ON c.id = p.cidade_id;

-- Mysql ñ suporta
-- SELECT * FROM cidades c
-- FULL JOIN prefeitos p
-- ON c.id = p.cidade_id;

SELECT * FROM cidades c
LEFT JOIN prefeitos p
ON c.id = p.cidade_id
union
SELECT * FROM cidades c
RIGHT JOIN prefeitos p
ON c.id = p.cidade_id;

SELECT * FROM cidades c
LEFT JOIN prefeitos p
ON c.id = p.cidade_id
union all
SELECT * FROM cidades c
RIGHT JOIN prefeitos p
ON c.id = p.cidade_id;
