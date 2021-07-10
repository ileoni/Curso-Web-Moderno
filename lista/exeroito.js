/**Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

// const multiplicar = function(valorA, valorB) {
//     var mutiplicacao = 0
//     for(let i = 0; i < valorB; i++){
//         mutiplicacao += valorA 
//     } 
//     console.log(mutiplicacao)
// }

// const multiplicar = function(numero, multiplicador) {
//     if(numero === 0 || multiplicador === 0) return 0
//     return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
// }

const multiplicar = function(numeroA, numeroB) {
    if(numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicadorRecursivamente(numero, multiplicador) {
        return(
            multiplicador === 1 ?
            numero :
            numero + multiplicadorRecursivamente(numero, multiplicador - 1)
        )
    }

    return multiplicadorRecursivamente(maiorNumero, menorNumero)
}

// console.log(
//     multiplicar(5, 7),
//     multiplicar(8, 7)
// )