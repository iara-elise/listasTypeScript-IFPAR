import * as readline from 'readline-sync';

let valor_01: number = parseInt(readline.question("Valor 1: "));
let valor_02: number = parseInt(readline.question("Valor 2: "));
let valor_03: number = parseInt(readline.question("Valor 3: "));

console.log()

console.log("Deseja ver os valores inseridos em ordem crescente ou decrescente? \n")

let escolha: number = parseInt(readline.question("1 - Crescente \n" + "2 - Descrescente \n" + "Informe sua preferência: "));

if (escolha == 1) {

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

}


else if (escolha == 2) {

    
if (valor_01 >= valor_02 && valor_01 >= valor_03) {

    if (valor_02 >= valor_03) {
        console.log(valor_01 + " " + valor_02 + " " + valor_03);
    }
    else {
        console.log(valor_01 + " " + valor_03 + " " + valor_02);
    }
}


else if (valor_02 >= valor_01 && valor_02 >= valor_03) {

    if (valor_01 >= valor_03) {
        console.log(valor_02 + " " + valor_01 + " " + valor_03);
    }
    else {
        console.log(valor_02 + " " + valor_03 + " " + valor_01);
    }
}

else {

    if (valor_01 >= valor_02) {
        console.log(valor_03 + " " + valor_01+ " " + valor_02);
    }
    else {
        console.log(valor_03 + " " + valor_02 + " " + valor_01);
    }
}

}

else {

    console.log("Preferência inválida.")
}