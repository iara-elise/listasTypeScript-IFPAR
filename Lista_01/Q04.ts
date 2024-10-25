import * as readline from 'readline-sync';

let base: number = parseFloat(readline.question("Base: "));
let altura: number = parseFloat(readline.question("Altura: "));

let areaTriangulo: number = (base * altura) / 2;
console.log("A área do triângulo é: " + areaTriangulo);