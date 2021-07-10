/**Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

// const repitir = function(numero, repiticao){
//     let newArray = []

//     for(let i = 0; i < repiticao; i++)
//         newArray.push(numero)

//     console.log(newArray)
// }

const repitir = function(item, quantidade) {
    console.log(
        Array(quantidade).fill(item)
    )
}

repitir("código", 2)
repitir(7, 3)