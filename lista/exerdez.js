/**Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

// const simboloMais = function(quantidade) {
//     let string = ''
    
//     for(let i = 0; i < quantidade; i++)
//     {
//         string += '+'
//     }

//     return string
// }

// const simboloMais = function(quantidade) {
//     return Array(quantidade).fill('+').join('')
// }

const simboloMais = function(quantidade) {
    return "+".repeat(quantidade)
}

console.log(
    simboloMais(2),
    simboloMais(4)
)