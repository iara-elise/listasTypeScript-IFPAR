"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var valor = parseFloat(readline.question("Informe um número entre 1 e 10: "));
if (valor <= 10) {
    console.log("O número digitado está DENTRO do intervalo indicado.");
}
else {
    console.log("O número digitado está FORA do intervalo indicado.");
}
