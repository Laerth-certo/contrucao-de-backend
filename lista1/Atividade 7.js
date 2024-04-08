const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
  rl.question('Digite a segunda nota: ', (nota2) => {
    // Convertendo as notas para números
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);

    // Definindo os pesos das notas
    const pesoNota1 = 4;
    const pesoNota2 = 6;

    // Calculando a média final ponderada
    const mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

    // Exibindo a média final
    console.log(`A média final do aluno é: ${mediaFinal.toFixed(2)}`);

    rl.close();
  });
});
