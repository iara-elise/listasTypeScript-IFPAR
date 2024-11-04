import * as readline from 'readline-sync';

let valor_01: number = parseFloat(readline.question("Informe o primeiro valor: "));
let valor_02: number = parseFloat(readline.question("Informe o segundo valor: "));

if (valor_01 > valor_02) {
    console.log(valor_01 + " é maior que " + valor_02 + ".");
}

else {
    console.log(valor_02 + " é maior que " + valor_01 + ".");
}