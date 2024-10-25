"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var base = parseFloat(readline.question("Base: "));
var altura = parseFloat(readline.question("Altura: "));
var areaTriangulo = (base * altura) / 2;
console.log("A área do triângulo é: " + areaTriangulo);
