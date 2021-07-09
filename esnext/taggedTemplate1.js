// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    console.log('Outro string')
}

const aluno = 'Gui'
const situação = 'Aprovado'
console.log(tag `${aluno} está ${situação}`)
