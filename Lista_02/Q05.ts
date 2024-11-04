import * as readline from 'readline-sync';

let valor_01: number = parseFloat(readline.question("Insira o primeiro valor: "));
let valor_02: number = parseFloat(readline.question("Insira o segundo valor: "));

if (valor_01 > valor_02) {
    let diferenca: number = valor_01 - valor_02;
    console.log("A diferença entre " + valor_01 + " e " + valor_02 + " é " + diferenca);
}

else {
    let diferenca: number = valor_02 - valor_01;
    console.log("A diferença entre " + valor_02 + " e " + valor_01 + " é " + diferenca);
}