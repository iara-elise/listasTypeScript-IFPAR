import * as readline from 'readline-sync';

let valor: number = parseFloat(readline.question("Informe um número entre 1 e 10: "));

if (valor <= 10) {
    console.log("O número digitado está DENTRO do intervalo indicado.")
}

else {
    console.log("O número digitado está FORA do intervalo indicado.")
}