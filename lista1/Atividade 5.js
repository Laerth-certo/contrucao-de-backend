const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o custo de fábrica do carro: ', (custoFabrica) => {
  rl.question('Digite a porcentagem do distribuidor (%): ', (porcentagemDistribuidor) => {
    rl.question('Digite a porcentagem de imposto (%): ', (porcentagemImposto) => {
      // Convertendo os valores para números
      custoFabrica = parseFloat(custoFabrica);
      porcentagemDistribuidor = parseFloat(porcentagemDistribuidor);
      porcentagemImposto = parseFloat(porcentagemImposto);
      
      // Calculando o valor do distribuidor e dos impostos
      const valorDistribuidor = custoFabrica * (porcentagemDistribuidor / 100);
      const valorImposto = custoFabrica * (porcentagemImposto / 100);
      
      // Calculando o custo final ao consumidor
      const custoFinal = custoFabrica + valorDistribuidor + valorImposto;
      
      // Exibindo o custo final ao consumidor
      console.log(`O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
      
      rl.close();
    });
  });
});
