import * as readline from 'readline-sync';

let somatorioNotas: number = 0;
let qtdNotas: number = 0;

for(let i = 1; i <= 3; i++) {
    let nota: number = parseFloat(readline.question("Nota " + i + ": "));

    somatorioNotas += nota;
    qtdNotas++;
}

let mediaArimetica: number = somatorioNotas / qtdNotas;
console.log("MÉDIA: " + mediaArimetica.toFixed(1));

