import * as readline from 'readline-sync';

let valor: number = parseFloat(readline.question("Insira um valor: "));

console.log()

for(let i = 1; i <= 10; i++) {
    console.log(valor + " * " + i + " = " + valor * i);
}
