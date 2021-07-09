function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.45))
console.log(criarProduto('IPad', 1199.45))