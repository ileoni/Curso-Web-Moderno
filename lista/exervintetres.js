/**Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

const contarPalavras = function(frase) {
    const palavras = frase.split(' ')
    return palavras.length
}

console.log(
    contarPalavras("Sou uma frase"), // retornará 3
    contarPalavras("Me divirto aprendendo a programar") // retornará 5
)
