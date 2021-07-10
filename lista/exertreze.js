/**Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

// const filtrarNumeros = function(...params) {
//     return params.shift().filter(item => typeof item === "number")
// }

// const filtrarNumeros = function(...params){
//     const newArray = []
//     params.shift().filter( e => typeof e === "number" ? newArray.push(e): '')
//     return newArray
// }

const filtrarNumeros = function(...params) {
    const newArray = []
    
    for(let item of params.shift())
        if(typeof item === "number") newArray.push(item)
    
    return newArray
}

console.log(
    filtrarNumeros(["Javascript", 1, "3", "Web", 20]), // retornará [1, 20]
    filtrarNumeros(["a", "c"]) // retornará []
)