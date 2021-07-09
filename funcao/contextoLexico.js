const valor = 'Global'

function minhaFuncao() { // função busca o valor no local onde foi definida, e não onde foi excutada
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()