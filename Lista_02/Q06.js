"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var valor_01 = parseFloat(readline.question("Valor 1: "));
var valor_02 = parseFloat(readline.question("Valor 2: "));
var valor_03 = parseFloat(readline.question("Valor 3: "));
if (valor_01 <= valor_02 && valor_01 <= valor_03) {
    if (valor_02 <= valor_03) {
        console.log(valor_01 + " " + valor_02 + " " + valor_03);
    }
    else {
        console.log(valor_01 + " " + valor_03 + " " + valor_02);
    }
}
else if (valor_02 <= valor_01 && valor_02 <= valor_03) {
    if (valor_01 <= valor_03) {
        console.log(valor_02 + " " + valor_01 + " " + valor_03);
    }
    else {
        console.log(valor_02 + " " + valor_03 + " " + valor_01);
    }
}
else {
    if (valor_01 <= valor_02) {
        console.log(valor_03 + " " + valor_01 + " " + valor_02);
    }
    else {
        console.log(valor_03 + " " + valor_02 + " " + valor_01);
    }
}
