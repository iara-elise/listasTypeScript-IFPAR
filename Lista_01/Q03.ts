import * as readline from 'readline-sync';

const pi: number = 3.14;

let raio: number = parseFloat(readline.question("Insira o valor do raio: "));
let areaCirculo: number = pi * Math.pow(raio, 2);

console.log("A área do circulo é: " + areaCirculo.toFixed(1));
