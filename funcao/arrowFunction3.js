comparaComThis = function (param) {
    console.log(this === param)
}
// comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
// comparaComThis(global)
// comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // função arrow ñ aponta para global
// comparaComThisArrow(global)
// comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // função arrow ñ sofre alteração pelo bind
// comparaComThisArrow(obj)
// comparaComThisArrow(module.exports)

