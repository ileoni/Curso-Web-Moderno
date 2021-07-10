/**Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

// const despesasTotais = function(precos) {
//     return precos.map(e => e.preco ).reduce( ( acumulativo, valorAtual ) => acumulativo += valorAtual)
// }

// const despesasTotais = function(itens) {
//     return itens.reduce( ( acumulativo, valorAtual ) => acumulativo + valorAtual.preco, 0)
// }

// const despesasTotais = function(precos) {
//     let resultado = 0
//     for(let i = 0; i < precos.length; i++){
//         resultado += precos[i].preco
//     }
//     return resultado
// }

// const despesasTotais = function(itens) {
//     let resultado = 0
//     for(let item of itens)
//         resultado += item.preco
//     return resultado
// }

// const despesasTotais = function(precos) {
//     let quantidadeDePrecos = precos.length
//     return quantidadeDePrecos === 0 ? 0: precos.shift().preco + despesasTotais(precos)
// }

console.log(
    despesasTotais([
        {nome: "Jornal online", categoria: "Informação", preco: 89.99},
        {nome: "Cinema", categoria: "Entretenimento", preco: 150}
        ]), // retornará 239.99
    despesasTotais([
        {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
        {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
        ]) // retornará 34599.89        
)