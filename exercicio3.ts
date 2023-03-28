const entrada3 = require("readline-sync");
let numero: number = parseFloat(entrada3.question("Digite o numero da sua conta: "));
let saldo: number = parseFloat(entrada3.question("digite seu atual saldo: "));
let debito: number = parseFloat(entrada3.question("digite seu debito: "));
let credito: number = parseFloat(entrada3.question("digite seu credito: "));

let total=(saldo+credito+debito)
if(total>0){
    console.log("Seu saldo positivo é de: ", +total)
}
else{
    console.log("putz, seu saldo é negativo, voce tem: ",+total)
}