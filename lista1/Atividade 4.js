const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o custo de fábrica do carro: ', (custoFabrica) => {
    // Convertendo o custo de fábrica para número
    custoFabrica = parseFloat(custoFabrica);
    
    // Calculando o percentual do distribuidor e dos impostos
    const percentualDistribuidor = 0.28;
    const percentualImpostos = 0.45;
    
    // Calculando o custo final ao consumidor
    const custoDistribuidor = custoFabrica * percentualDistribuidor;
    const custoImpostos = custoFabrica * percentualImpostos;
    const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;
    
    // Exibindo o custo final ao consumidor
    console.log(`O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
    
    rl.close();
});
