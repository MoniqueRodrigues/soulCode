//Estrururas Condicionais- realizam tarefas que dependem de uma condição.
//Condição -> Calculo Lógico

// if(){

//     condição/calculológico
// }
// console.log("oi")



// const altura = 1.59;
// if(altura >= 1.60)
//     console.log("está autorizado");
// else
//     console.log("Não pode entrar");

// let nivelIngles = 6;
// if(nivelIngles == 1){
//     console.log("Nível iniciante");
// }else if (nivelIngles==2 ){
//     console.log("Nível básico");

// }else if(nivelIngles==3){
//     console.log("Nível intermediário");
// }else{
//     console.log("deconhecido");
// }



// let preco= 50;
// if(preco > 100){
//     console.log("Comprar um livro");
//     if(preco > 200){
//         console.log("comprar um tênis");
//     }
//     if(preco > 1000){
//         console.log("comprar uma bolsa");
//     }

// }

// let opcao = "";
// if(opcao == "arquivo"){
//     console.log("Novo, Abrir, Configurações");
// }else if(opcao == "editar"){
//     console.log("Desfazer, Refazer, Recortar")
// }else{
//     console.log("Selecione a opção");
// }


// let fezCompra = false;
// let saldo = 500;
// if(saldo > 300){
//     fezCompra = true;
//     console.log("deu bom");
// }else{
//     fezCompra = false;
//     console.log("Sem grana");

// }

// console.log(fezCompra);

/* **************************************** */
// let num1 = 150, num2 = 120, num3 = 300;
// if(num1 == num2 || num2 == num3 || num1 == num3) {
//     console.log("Os numeros não podem ser iguais.");
// }

// else if(num1 > num2 && num1 > num3) {
//     if(num2 > num3) {
//         console.log(num1 + " > " + num2 + " > " + num3); // num1 > num2 > num3
//     }
//     else {
//         console.log(num1 + " > " + num3 + " > " + num2); // num1 > num3 > num2
//     }
// }
// else if(num2 > num1 && num2 > num3) {
//     if(num1 > num3) {
//         console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
//     }
//     else {
//         console.log(num2 + " > " + num3 + " > " + num1); // num2 > num3 > mum1
//     }
// }
// else {
//     if(num1 > num2) {
//         console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > mum2
//     }
//     else {
//         console.log(num3 + " > " + num2 + " > " + num1); // num3 > num2 > mum1
//     }
// }

// /--------------SWITHCASE----------------------/ 
// estrutura condicional com 1 valor e casos diferentes

let mes = 8;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
    case 12:
        console.log("Dezembro");
        break;
        default:
            console.log("Este mês não existe")

}

