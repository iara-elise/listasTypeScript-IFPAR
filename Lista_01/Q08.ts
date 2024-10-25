import * as readline from 'readline-sync';

let a: number = parseFloat(readline.question("Valor de a: "));
let b: number = parseFloat(readline.question("Valor de b: "));
let c: number = parseFloat(readline.question("Valor de c: "));
let x: number = parseFloat(readline.question("Valor de x: "));

console.log()

let y = (a * Math.pow(x, 2)) + (b * x) + c;
console.log("Valor de y: " + y.toFixed(1)); 