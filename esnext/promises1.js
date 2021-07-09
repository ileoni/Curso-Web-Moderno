function primeiroElemento(string) {
    return string[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) // resultado é a promessa
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)