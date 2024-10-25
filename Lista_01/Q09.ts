import * as readline from 'readline-sync';

let altura: number = parseFloat(readline.question("Altura: "));
let peso: number = parseFloat(readline.question("Peso: "));

let imc: number = peso / Math.pow(altura, 2);
console.log("IMC: " + imc.toFixed(1));