function calcularSalario(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    console.log(`Salário igual a R$ ${salarioLiquido}`)
}

calcularSalario(180, 60)