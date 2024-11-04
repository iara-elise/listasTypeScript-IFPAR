"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var ano = parseFloat(readline.question("Informe um ano: "));
if (ano % 4 == 0 && ano % 100 != 0) {
    console.log("O ano é bissexto.");
}
else {
    console.log("O ano não é bissexto.");
}
