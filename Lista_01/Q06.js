"use strict";
// // import * as readline from 'readline-sync';
Object.defineProperty(exports, "__esModule", { value: true });
// // let nota_01: number = 7;
// // let nota_02: number = 8.5;
// // let nota_03: number = 9;
// // let mediaArimetica = (nota_01 + nota_02 + nota_03) / 3;
// // console.log("NOTAS: " + nota_01 + ", " + nota_02 + ", " + nota_03);
// // console.log("Média aritmética: " + mediaArimetica.toFixed(1));
// import * as readline from 'readline-sync';
// let nota_01: number = parseFloat(readline.question("Digite a primeira nota: "));
// let nota_02: number = parseFloat(readline.question("Digite a segunda nota: "));
// let nota_03: number = parseFloat(readline.question("Digite a terceira nota: "));
// let mediaAritmetica = (nota_01 + nota_02 + nota_03) / 3;
// console.log(`Média aritmética: ${mediaAritmetica.toFixed(1)}`);
var readline = require("readline-sync");
var somatorioNotas = 0;
var qtdNotas = 0;
for (var i = 1; i <= 3; i++) {
    var nota = parseFloat(readline.question("Nota " + i + ": "));
    somatorioNotas += nota;
    qtdNotas++;
}
var mediaArimetica = somatorioNotas / qtdNotas;
console.log("MÉDIA: " + mediaArimetica.toFixed(1));
