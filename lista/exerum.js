
function comprimentar(nome) {
    const saudacao = "Olá"
    console.log(
        [saudacao, nome].join(', ').concat('!')
    )
}

function comprimentar2(nome) {
    console.log(`Olá, ${nome}!`);
}

function comprimentar3(nome) {
    console.log("Olá, " + nome + "!");
}

comprimentar("Leonardo")
comprimentar("Maria")

comprimentar2("Leonardo")
comprimentar2("Maria")

comprimentar3("Leonardo")
comprimentar3("Maria")
