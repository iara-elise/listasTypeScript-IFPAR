import * as readline from  'readline-sync';

let valor_01: number = parseFloat(readline.question("Valor 1: "));
let valor_02: number = parseFloat(readline.question("Valor 2: "));
let valor_03: number = parseFloat(readline.question("Valor 3: "));

if (valor_01 <= valor_02 && valor_01 <= valor_03) {

    if (valor_02 <= valor_03) {
        console.log(valor_01 + " " + valor_02 + " " + valor_03);
    }
    else {
        console.log(valor_01 + " " + valor_03 + " " + valor_02);
    }
}


else if (valor_02 <= valor_01 && valor_02 <= valor_03) {

    if (valor_01 <= valor_03) {
        console.log(valor_02 + " " + valor_01 + " " + valor_03);
    }
    else {
        console.log(valor_02 + " " + valor_03 + " " + valor_01);
    }
}

else {

    if (valor_01 <= valor_02) {
        console.log(valor_03 + " " + valor_01+ " " + valor_02);
    }
    else {
        console.log(valor_03 + " " + valor_02 + " " + valor_01);
    }
}
