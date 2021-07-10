/**Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:*/

// const objetoParaArray = function(objeto) {
//     const array = []
//     for(let index in objeto)
//         array.push([ index, objeto[index] ])
//     return array
// }

// const objetoParaArray = function(objeto) {
//     const chaves = Object.keys(objeto)
//     const resultado = chaves.map( chave => [chave, objeto[chave]]) 
//     return resultado
// }

const objetoParaArray = function(objeto) {
    return Object.entries(objeto)
}

console.log(
    objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
    }), // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
    objetoParaArray({
        codigo: 11111,
        preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
)
    