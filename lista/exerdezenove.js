/**Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.*/

// const calcularMedia = function(notas) {
//     for(let index in notas){
//         let soma  = notas.reduce((acumulador, valorAtual) => acumulador += valorAtual)
//         let peso = notas.length
//         return soma / peso
//     }
// }

// const calcularMedia = function(notas) {
//     return notas.reduce((acumulador, valorAtual) => acumulador += valorAtual) / notas.length
// }

console.log(
    calcularMedia([0, 10]), // retornará 5
    calcularMedia([1, 2, 3, 4, 5]) // retornará 3
)
