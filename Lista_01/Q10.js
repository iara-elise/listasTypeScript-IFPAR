"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var valor = parseFloat(readline.question("Insira um valor: "));
console.log();
for (var i = 1; i <= 10; i++) {
    console.log(valor + " * " + i + " = " + valor * i);
}
