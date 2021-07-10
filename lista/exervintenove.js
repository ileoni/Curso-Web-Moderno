/**Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.*/

// const segundoMaior = function(numeros) {
//     let penultimoIndice = numeros.length - 2
//     let orderCrescente = (a, b) => a - b
//     return numeros.sort(orderCrescente)[penultimoIndice]
// }

// const segundoMaior = function(numeros) {
//     let indiceDoMaior = 0
//     let segundoMaior

//     numeros.forEach( (numero, indice) => {
//         if(numero > numeros[indiceDoMaior])
//             indiceDoMaior = indice
//     })

//     numeros.splice(indiceDoMaior, 1)
//     segundoMaior = numeros[0]

//     numeros.forEach(numero => {
//         if(numero > segundoMaior)
//             segundoMaior = numero
//     })

//     return segundoMaior
// }

// const segundoMaior = function(numeros) {
//     const maiorNumero = Math.max(...numeros)
//     numeros = numeros.filter(numero => numero != maiorNumero)
//     const segundoMaior = Math.max(...numeros)

//     return numeros
// }

const segundoMaior = function(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    
    return segundoMaior
}

console.log(
    segundoMaior([12, 16, 1, 5]), // retornará 12
    segundoMaior([8, 4, 5, 6]) // retornará 6
)