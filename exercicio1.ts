const entrada1 = require("readline-sync");
let salario1: number = parseFloat(entrada1.question("digite seu salario por hora: "));
let hr1: number = parseFloat(entrada1.question("digite as horas trabalhadas no mes: ")); 

if(m1 > 160){
    let sx: number = (m1 - 160)
console.log("Seu salario atual é: ", (160 + sx*1.5)*salario1,"(com hora extra)");
}
else if(hr1 <= 160){
    console.log("seu salario total é: ",m1 * salario1);
}
else{
    console.log("digite o valor em numeros.");
}

