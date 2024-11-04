"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var salario = parseFloat(readline.question("Informe o seu salário: "));
if (salario <= 1903.98) {
    console.log("Você está insento do imposto de renda!");
}
else if (salario <= 2826.65) {
    var impostoDeRenda = salario * 7.5 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}
else if (salario <= 3751.05) {
    var impostoDeRenda = salario * 15 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}
else if (salario <= 4664.68) {
    var impostoDeRenda = salario * 22.5 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}
else {
    var impostoDeRenda = salario * 27.5 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}
