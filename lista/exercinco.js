const maiorOuIgual = function(valor1, valor2){
    let resultado = (valor1 === valor2) ? true: false

    console.log(resultado)
} 
// maiorOuIgual(0, 0)
// maiorOuIgual(0, "0")
// maiorOuIgual(5, 1)

const maiorOuIgual1 = function(valor1, valor2){
    let valores = [valor1, valor2]
    
    console.log(
        valores.reduce((antes, depois) => {
            return (antes === depois) ? true : false
        })
    )
} 
// maiorOuIgual1(0, 0)
// maiorOuIgual1(0, "0")
// maiorOuIgual1(5, 1)

const maiorOuIgual2 = function(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
maiorOuIgual1(0, 0)
maiorOuIgual1(0, "0")
maiorOuIgual1(5, 1)
