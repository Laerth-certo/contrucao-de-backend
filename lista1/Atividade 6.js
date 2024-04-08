const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de carros vendidos: ', (numCarrosVendidos) => {
  rl.question('Digite o valor total das vendas: ', (valorTotalVendas) => {
    rl.question('Digite o salário fixo do vendedor: ', (salarioFixo) => {
      rl.question('Digite o valor da comissão por carro vendido: ', (comissaoPorCarro) => {
        // Convertendo os valores para números
        numCarrosVendidos = parseInt(numCarrosVendidos);
        valorTotalVendas = parseFloat(valorTotalVendas);
        salarioFixo = parseFloat(salarioFixo);
        comissaoPorCarro = parseFloat(comissaoPorCarro);

        // Calculando o valor da comissão total
        const comissaoTotal = numCarrosVendidos * comissaoPorCarro;
        
        // Calculando o valor da comissão adicional (5% das vendas)
        const comissaoAdicional = 0.05 * valorTotalVendas;
        
        // Calculando o salário final do vendedor
        const salarioFinal = salarioFixo + comissaoTotal + comissaoAdicional;

        // Exibindo o salário final do vendedor
        console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);

        rl.close();
      });
    });
  });
});
