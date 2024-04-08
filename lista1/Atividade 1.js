// Função para calcular a média das notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Função para verificar se o aluno foi aprovado ou reprovado
function verificarAprovacao(media) {
    if (media >= 7.0) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Função principal para receber as notas e calcular a média
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite a primeira nota: ', (nota1) => {
        readline.question('Digite a segunda nota: ', (nota2) => {
            readline.question('Digite a terceira nota: ', (nota3) => {
                readline.question('Digite a quarta nota: ', (nota4) => {
                    const notas = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), parseFloat(nota4)];
                    const media = calcularMedia(notas);
                    const resultado = verificarAprovacao(media);
                    console.log(`A média do aluno é: ${media.toFixed(2)}`);
                    console.log(`O aluno está ${resultado}`);
                    readline.close();
                });
            });
        });
    });
}

// Chamada da função principal
main();
