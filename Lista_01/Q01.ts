import * as readline from 'readline-sync';

let num_01: number = parseFloat(readline.question("Nota 01: "));
let num_02: number = parseFloat(readline.question("Nota 02: "));

let soma: number = num_01 + num_02;
console.log("SOMA: " + soma);

let subtracao: number = num_01 - num_02;
console.log("SUBTRAÇÃO: " + subtracao);

let multiplicacao: number = num_01 * num_02;
console.log("MULTIPLICALÇÃO: " + multiplicacao);

let divisao: number = num_01 / num_02;
console.log("DIVISÃO: " + divisao);