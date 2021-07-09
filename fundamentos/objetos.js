const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 78.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

' { "nome": "Camisa Polo", "preco": 78.90 } ' //Json

console.log(prod2)
