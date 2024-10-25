import * as readline from  'readline-sync';

export const pi: number = 3.14;

let raioEsfera: number = parseFloat(readline.question("Insira o valor do raio de uma esfera: "));

let volumeEsfera: number = 4 / 3 * pi *  Math.pow(raioEsfera, 3);
console.log("O volume da esfera é: " + volumeEsfera.toFixed(1));