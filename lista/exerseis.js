const inverso = function(valor) {
    const tipo = typeof valor
    let resultado

    if(tipo == "boolean") resultado = !valor

    else if(tipo == "number")  resultado = -valor

    else resultado = `booleano ou numerico esperados, mas o parâmetro é do tipo ${tipo}`

    console.log(resultado)
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")
