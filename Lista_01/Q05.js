"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = void 0;
var readline = require("readline-sync");
exports.pi = 3.14;
var raioEsfera = parseFloat(readline.question("Insira o valor do raio de uma esfera: "));
var volumeEsfera = 4 / 3 * exports.pi * Math.pow(raioEsfera, 3);
console.log("O volume da esfera é: " + volumeEsfera.toFixed(1));
