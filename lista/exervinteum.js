/**Criar uma função que receba um array de números e retorne o menor número desse array.*/

// const menorNumero = function(numeros){
//     let resultado = 0
//     numeros.reduce( (primeiro, valorAtual) => {
//         if(primeiro >= valorAtual) resultado = valorAtual
//     })
//     return resultado
// }

// const menorNumero = function(numeros) {
//         return Math.min(...numeros)
// }

console.log(
    menorNumero([10, 5, 35, 65]), // retornará 5
    menorNumero([5, -15, 50, 3]) // retornará -15
)
