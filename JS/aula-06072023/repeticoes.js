/*Estrutura de repetições*/

// for(atribução; condição; reatribuição){
//     codigo repetido
// }

// incrementa de 1 unidade
let numero;
for (numero = 0; numero < 10; numero++) {
    console.log("número de 1 em 1: ", numero);


}


// incrementa de 1 unidade
let numero1;
for (numero1 = 0; numero1 < 10; numero1 = numero1 + 2) {
    console.log("número de 2 em 2: ", numero);
}


// diminui de 1 unidade
let numero3;
for (numero3 = 10; numero3 > 0; numero3 --) {
    console.log("número regressivo de 10 a 1: ", numero3);
}



// diminui de 0 a 20

for(let numero=0; numero <= 20; numero ++){
    console.log("número de 0 a 20: ", numero);
}


// -------while
let n = 0;
while(n < 5){
    console.log("Monique")
    n++;

}

//form- quantidade de repetiçoes determinadas;
//while- quantidade de repetições indeterminadas;
// iteração --> i


// Calcula se o número é primo
let num=80;
let ePrimo = true;
for(let i= 2; i < num; i++){
    if(num % i == 0){
        ePrimo= false;
        console.log( "Não é primo");
    }
    
}

if(ePrimo){
    console.log("É primo");
}
else{
    console.log("não é primo");
}
