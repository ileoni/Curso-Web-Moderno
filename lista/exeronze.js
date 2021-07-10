/**Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:*/

// const receberPrimeiroEUltimoElemento = function(...params){
//     params.splice(1, 1)
//     return params
// }

// const receberPrimeiroEUltimoElemento = function(...elementos) {
//     const indiceDoPrimeiroElemento = 0
//     const indiceDoUltimoElemento = elementos.length - 1
//     const primeiroElemento = elementos[indiceDoPrimeiroElemento]
//     const ultimoElemento = elementos[indiceDoUltimoElemento]
//     return [primeiroElemento, ultimoElemento]
// }

// const receberPrimeiroEUltimoElemento = function(...elementos) {
//     const primeiroElemento = elementos.shift()
//     const ultimoElemento = elementos.pop()
//     return [primeiroElemento, ultimoElemento]
// }

const receberPrimeiroEUltimoElemento = function(primeiroElemento, ...elementos) {
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
}

console.log(
    receberPrimeiroEUltimoElemento(7, 14, "Olá"),
    receberPrimeiroEUltimoElemento(-100, "aplicativo", 16)
)