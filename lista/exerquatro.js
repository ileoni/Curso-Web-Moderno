const nomeDoMes1 = function(mes) {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    console.log(meses[--mes])
}

nomeDoMes1(1)
nomeDoMes1(2)

const nomeDoMes2 = function(mes) {
    switch (mes) {
        case 1: console.log("Janeiro")
            break;
        case 2: console.log("Fevereiro")
            break;
        case 3: console.log("Março")
            break;
        case 4: console.log("Abril")
            break;
        case 5: console.log("Maio")
            break;
        case 6: console.log("Junho")
            break;
        case 7: console.log("Julho")
            break;
        case 8: console.log("Agosto")
            break;
        case 9: console.log("Setembro")
            break;
        case 10: console.log("Outubro")
            break;
        case 11: console.log("Novembro")
            break;
        case 12: console.log("Dezembro")
        break;
        default:
            console.log('Mês não existe!')
            break;
    }
}

nomeDoMes2(1)
nomeDoMes2(2)

const nomeDoMes3 = function(mes) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    if(mes > 12) console.log("Mês não existe!")

    meses.forEach((element, index) => {
        if((index + 1) == mes) console.log(element)
    })
}

nomeDoMes3(1)
nomeDoMes3(2)
nomeDoMes3(13)
