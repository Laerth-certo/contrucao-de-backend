const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o salário mensal atual do funcionário: ', (salarioAtual) => {
  rl.question('Digite o percentual de reajuste (%): ', (percentualReajuste) => {
    // Convertendo o salário atual para número
    salarioAtual = parseFloat(salarioAtual);
    // Convertendo o percentual de reajuste para número e transformando em decimal
    percentualReajuste = parseFloat(percentualReajuste) / 100;

    // Calculando o novo salário
    const novoSalario = salarioAtual * (1 + percentualReajuste);

    // Exibindo o novo salário
    console.log(`O novo salário do funcionário é: R$ ${novoSalario.toFixed(2)}`);

    rl.close();
  });
});
