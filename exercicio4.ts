const entrada4= require("readline-sync");
let n: number = parseFloat(entrada4.question("digite um numero: "));
if(n>0){
    console.log(n +"Seu numero é...positivo!");
}
if(n<0){
    console.log(n + "seu numero é...negativo!");
}
if( n==0){
    console.log(n + "uai teu numero é zero!");
}