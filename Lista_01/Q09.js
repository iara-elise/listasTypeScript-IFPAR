"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var altura = parseFloat(readline.question("Altura: "));
var peso = parseFloat(readline.question("Peso: "));
var imc = peso / Math.pow(altura, 2);
console.log("IMC: " + imc.toFixed(1));
