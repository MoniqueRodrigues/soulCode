// Atividade JavaScript  - Aula 06/07/2023
// Prof. Gabriel Braga
// •
// Ontem (editado: Ontem)
// Objetivo:
// Exercitar os conceitos fundamentais de JavaScript e fortalecer as habilidades de programação, por meio da resolução de exercícios práticos.

// Questões:
// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente. ok
// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade. ok
// Escreva um programa que receba três números e determine qual deles é o maior. ok
// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).


// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let numero = "-3";

if (numero < 0) {
    console.log("É negativo: ", numero)
} else if (numero === 0) {
    console.log("O número informado é igual a 0 :", numero);

} else if (numero > 0) {
    console.log("O número informado é positivo: ", numero);
}
else (console.log("Por favor informe um número"))


// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 16;
if (idade >= 18) {
    console.log("Você é considerada maior de idade pois possui: " + idade + " anos .")
} else { console.log("Você é considerado menor de idade porque possui " + idade + " anos .") };



// Escreva um programa que receba três números e determine qual deles é o maior.
let a = 50;
let b = 50;
let c = 120;
if(a > b && a > c) {
    console.log("Maior numero é: " + a);
}
else if(b > a && b > c) {
    console.log("Maior numero é: " + b);
}
else if(c > a && c > b) {
    console.log("Maior numero é: " + c);
}
else {
    console.log("O maior numero esta duplicado");
}


// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
let num1 = 2;
let num2 = 4;
let produto = num1 * num2;
if (produto % 2 === 0) {
    console.log("é par");
} else {
    console.log("é impar");
}
// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "domingo";
if (dia == "segunda-feira" || dia == "terca-feira" || dia == "quarta=feira" || dia == "quinta-feira" || dia == "sexta-feira") {
    console.log("dia útil ", dia)
}
else if (dia == "sábado" || dia == "domingo") {
    console.log("fim de semana", dia)

} else {
    console.log("Informe um dia da semana ");
}


// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let diaNum = "";
switch (diaNum) {
    case 1:
        console.log("domingo");
        break;

    case 2:
        console.log("segunda- feira");
        break;

    case 3:
        console.log("terça-feira");
        break;



    case 4:
        console.log("quarta-feira");
        break;



    case 5:
        console.log("quinta-feira");
        break;



    case 6:
        console.log("sexta-feira");
        break;



    case 7:
        console.log("sábado");
        break;
    default:
        console.log("Informe um número de 1 a 7 para saber o dia da semana. ")
}
