/**Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

// const filtrarPorQuantidadeDeDigitos = function(numeros, quantidadeDesejada){
//     const resultado = []
//     numeros.map(numero => {
//         if(String(numero).length === quantidadeDesejada) resultado.push(numero)   
//     })
//     return resultado
// }

const filtrarPorQuantidadeDeDigitos = function(numeros, quantidadeDesejada){
    return numeros.filter(numero => {
        let quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === quantidadeDesejada
    })
}

console.log(
    filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2), 
    filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) 
)
