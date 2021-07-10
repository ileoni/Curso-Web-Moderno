function converterIdadeEmAnosParaDias(idadeEmDias)
{
    console.log(
        [idadeEmDias, 365].reduce(
            (resultado, dias) => resultado * dias
        )
    )
}

converterIdadeEmAnosParaDias(25)
converterIdadeEmAnosParaDias(70)

function converterIdadeEmAnosParaDias2(idadeEmDias)
{
    let anoEmDias = 365 
    console.log(
        idadeEmDias * anoEmDias
    )
}

converterIdadeEmAnosParaDias2(25)
converterIdadeEmAnosParaDias2(70)