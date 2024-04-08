const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio da caixa d\'água (em metros): ', (raio) => {
  rl.question('Digite a altura da caixa d\'água (em metros): ', (altura) => {
    // Convertendo raio e altura para números
    raio = parseFloat(raio);
    altura = parseFloat(altura);

    // Calculando o volume
    const volume = Math.PI * Math.pow(raio, 2) * altura;

    // Exibindo o volume
    console.log(`O volume da caixa d'água é: ${volume.toFixed(2)} metros cúbicos`);

    rl.close();
  });
});
