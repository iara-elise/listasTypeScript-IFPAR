"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var readline = require("readline-sync");

var a = parseFloat(readline.question("Valor de a: "));
var b = parseFloat(readline.question("Valor de b: "));
var c = parseFloat(readline.question("Valor de c: "));
var x = parseFloat(readline.question("Valor de x: "));

console.log();

var y = (a * Math.pow(x, 2)) + (b * x) + c;
console.log("Valor de y: " + y.toFixed(1));
