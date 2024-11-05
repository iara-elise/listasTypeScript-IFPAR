"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var valor_01 = parseInt(readline.question("Valor 1: "));
var valor_02 = parseInt(readline.question("Valor 2: "));
var valor_03 = parseInt(readline.question("Valor 3: "));
console.log();
console.log("Deseja ver os valores inseridos em ordem crescente ou decrescente? \n");
// console.log("1 - Crescente");
// console.log("2 - Descrescente");
var escolha = parseInt(readline.question("1 - Crescente \n" + "2 - Descrescente \n" + "Informe sua preferência: "));
if (escolha == 1) {
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
}
else if (escolha == 2) {
    if (valor_01 >= valor_02 && valor_01 >= valor_03) {
        if (valor_02 >= valor_03) {
            console.log(valor_01 + " " + valor_02 + " " + valor_03);
        }
        else {
            console.log(valor_01 + " " + valor_03 + " " + valor_02);
        }
    }
    else if (valor_02 >= valor_01 && valor_02 >= valor_03) {
        if (valor_01 >= valor_03) {
            console.log(valor_02 + " " + valor_01 + " " + valor_03);
        }
        else {
            console.log(valor_02 + " " + valor_03 + " " + valor_01);
        }
    }
    else {
        if (valor_01 >= valor_02) {
            console.log(valor_03 + " " + valor_01 + " " + valor_02);
        }
        else {
            console.log(valor_03 + " " + valor_02 + " " + valor_01);
        }
    }
}
else {
    console.log("Preferência inválida.");
}
