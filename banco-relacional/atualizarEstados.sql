UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

select nome from estados where sigla = 'MA'

UPDATE estados
SET nome = 'Paraná', populacao = 11.32
WHERE sigla = 'PR'

select est.nome, sigla, populacao from estados est where sigla = 'PR'