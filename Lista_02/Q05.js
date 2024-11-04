"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var valor_01 = parseFloat(readline.question("Insira o primeiro valor: "));
var valor_02 = parseFloat(readline.question("Insira o segundo valor: "));
if (valor_01 > valor_02) {
    var diferenca = valor_01 - valor_02;
    console.log("A diferença entre " + valor_01 + " e " + valor_02 + " é " + diferenca);
}
else {
    var diferenca = valor_02 - valor_01;
    console.log("A diferença entre " + valor_02 + " e " + valor_01 + " é " + diferenca);
}
