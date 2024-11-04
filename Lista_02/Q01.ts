import * as readline from 'readline-sync';

let salario: number = parseFloat(readline.question("Informe o seu salário: "));

if (salario <= 1903.98) {
    console.log("Você está insento do imposto de renda!")
}

else if (salario <= 2826.65) {
   let impostoDeRenda: number = salario * 7.5 / 100;
   console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}

else if (salario <= 3751.05) {
    let impostoDeRenda: number = salario * 15 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}

else if (salario <= 4664.68) {
    let impostoDeRenda: number = salario * 22.5 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}

else {
    let impostoDeRenda: number = salario * 27.5 / 100;
    console.log("Total de imposto a pagar: R$ " + impostoDeRenda.toFixed(2));
}