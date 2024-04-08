const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (numero1) => {
  rl.question('Digite o segundo número: ', (numero2) => {
    // Convertendo os números para números de ponto flutuante
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Calculando a soma dos números
    const soma = numero1 + numero2;

    // Multiplicando a soma pelo primeiro número
    const resultado = soma * numero1;

    // Exibindo o resultado
    console.log(`A soma dos números é: ${soma}`);
    console.log(`O resultado da multiplicação é: ${resultado}`);

    rl.close();
  });
});
