"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var pi = 3.14;
var raio = parseFloat(readline.question("Insira o valor do raio: "));
var areaCirculo = pi * Math.pow(raio, 2);
console.log("A área do circulo é: " + areaCirculo.toFixed(1));
