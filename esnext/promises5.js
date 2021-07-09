function funcionarOuNao(valor, chanceErro) {
    return new Promise( (resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ecorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        // err => console.log(`Erro: Esp: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))