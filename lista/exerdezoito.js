/**Escreva uma função que receba um array de números e retornará a soma de todos os números desse array*/

// const somarNumeros = function(numeros) {
//     let soma = 0
//     for(let i = 0; i < numeros.length; i++){
//         soma += numeros[i]
//     }
//     return soma
// }

// const somarNumeros = function(numeros) {
//     let soma = 0
//     for(let item of numeros){
//         soma += item
//     }
//     return soma
// }

// const somarNumeros = function(numeros) {
//     let soma = 0
//     numeros.forEach( numero => soma += numero )
//     return soma
// }

// const somarNumeros = function(numeros) {
//     return numeros.reduce((acumulador, numeroAtual) => acumulador += numeroAtual)
// }

const somarNumeros = function(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

console.log(
    somarNumeros([10, 10, 10]), // retornará 30
    somarNumeros([15, 15, 15, 15]) // retornará 60
)