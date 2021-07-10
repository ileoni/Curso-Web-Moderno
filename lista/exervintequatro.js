/**Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.*/

// const contarCaractere = function( caracterBuscado, frase) {
//     let resultado = 0
//     frase.split('').filter((e) => {
//         if(e === caracterBuscado) resultado++
//     })
//     return resultado
// }

const contarCaractere = function( caracterBuscado, frase) {
    return [...frase].filter(caractere => caractere === caracterBuscado).length
}


console.log(
    contarCaractere("r", "A sorte favorece os audazes"), // retornará 2
    contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
)
