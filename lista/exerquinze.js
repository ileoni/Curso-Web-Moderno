/**Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

// const receberSomenteOsParesDeIndicesPares = function(numeros) {
//     let pares = []
//     for(let i = 0; i < numeros.length; i+=2){
//         if(numeros[i] % 2 === 0) pares.push(numeros[i])
//     }
//     return pares
// }

const receberSomenteOsParesDeIndicesPares = function(numeros) {
    return numeros.filter( (numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
}

console.log(
    receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]), // retornará []
    receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
)