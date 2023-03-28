const entrada8 = require ("readline-sync");
let nome = entrada8.question("digite seu nome: ")
let salario3: number = parseFloat(entrada8.question("digite seu salario atual: "));
let trabalho: number = parseFloat(entrada8.question("digite seus nos de trabalho: "));

if(trabalho<=3){
    let soma2 = salario3*1.03;
    console.log("seu novo salario é: " +soma2);

}
if(trabalho>3 && trabalho<10){
    let soma3 = salario3*1.125;
    console.log("seu novo salario é: " +soma3);

}

if(trabalho>10){
    let soma4 = salario3*1.2;
    console.log("seu novo salario é: " +soma4);
}