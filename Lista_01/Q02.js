"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var temperaturaC = parseFloat(readline.question("Insira a temperatura em graus Celsius: "));
var temperaturaF = (temperaturaC * 1.8) + 32;
console.log("Temperatura em graus Celsius: " + temperaturaC);
console.log("Temperatura convertida em graus Fahrenheit: " + temperaturaF);
