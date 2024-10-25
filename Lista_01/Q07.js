"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var somatorioNotas = 0;
var somatorioPesos = 0;
for (var i = 1; i <= 4; i++) {
    var nota = parseFloat(readline.question("Nota " + i + ": "));
    var peso = parseFloat(readline.question("Peso " + i + ": "));
    console.log();
    somatorioNotas += nota * peso;
    somatorioPesos += peso;
}
var mediaPonderada = somatorioNotas / somatorioPesos;
console.log("MÉDIA: " + mediaPonderada.toFixed(1));
