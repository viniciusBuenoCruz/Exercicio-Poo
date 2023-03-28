const entrada2 = require("readline-sync");
let salario2: number = parseFloat(entrada2.question("qual seu atual salario?: "));
let vendas: number = parseFloat(entrada2.question("numero total das vendas: "));

if(vendas <= 1.500){
    let soma = vendas*0.03;
    let total = soma+salario2;
    console.log("seu salario é de: " +total);
}

else{
    let soma = vendas*0.05;
    let total = soma+salario2;
    console.log("seu novo salario vai ser de: "+total);
}