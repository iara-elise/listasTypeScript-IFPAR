import * as readline from 'readline-sync';

let temperaturaC: number = parseFloat(readline.question("Insira a temperatura em graus Celsius: "));

let temperaturaF: number = (temperaturaC * 1.8) + 32;
console.log("Temperatura em graus Celsius: " + temperaturaC);
console.log("Temperatura convertida em graus Fahrenheit: " + temperaturaF);