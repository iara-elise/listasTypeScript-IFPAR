import * as readline from 'readline-sync';

let somatorioNotas: number = 0;
let somatorioPesos: number = 0;

for(let i = 1; i <= 4; i++) {
    let nota: number = parseFloat(readline.question("Nota " + i + ": "));
    let peso: number = parseFloat(readline.question("Peso " + i + ": "));

    console.log()

    somatorioNotas += nota * peso;
    somatorioPesos += peso;
}

let mediaPonderada: number = somatorioNotas / somatorioPesos;
console.log("MÉDIA: " + mediaPonderada.toFixed(1));