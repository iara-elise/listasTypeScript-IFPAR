"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var valor_01 = parseFloat(readline.question("Informe o primeiro valor: "));
var valor_02 = parseFloat(readline.question("Informe o segundo valor: "));
if (valor_01 > valor_02) {
    console.log(valor_01 + " é maior que " + valor_02 + ".");
}
else {
    console.log(valor_02 + " é maior que " + valor_01 + ".");
}
