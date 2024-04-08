const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número total de eleitores: ', (totalEleitores) => {
  rl.question('Digite o número de votos brancos: ', (votosBrancos) => {
    rl.question('Digite o número de votos nulos: ', (votosNulos) => {
      rl.question('Digite o número de votos válidos: ', (votosValidos) => {
        // Convertendo os valores para números
        totalEleitores = parseInt(totalEleitores);
        votosBrancos = parseInt(votosBrancos);
        votosNulos = parseInt(votosNulos);
        votosValidos = parseInt(votosValidos);

        // Calculando os percentuais
        const percentualBrancos = (votosBrancos / totalEleitores) * 100;
        const percentualNulos = (votosNulos / totalEleitores) * 100;
        const percentualValidos = (votosValidos / totalEleitores) * 100;

        // Exibindo os resultados
        console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
        console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
        console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);

        rl.close();
      });
    });
  });
});
