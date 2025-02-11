/* 
Faça um programa onde leia um número e diga se ele é: 

    - ímpar, 
    - par, 
    - é um número primo e impar, 
    - é par e divisível por 5. 
*/

const myNumber = 23
let divisor = 2;

while(myNumber%divisor != 0){
    divisor++;
}

if(myNumber%2 == 0){
    console.log(`O numero ${myNumber} é par`)
} else {
    console.log(`O numero ${myNumber} é impar`)
}

if (myNumber%5 == 0){
    console.log(`É divisível por 5`)
} else {
    console.log('NÃO é divisível por 5') 
}


if(myNumber == divisor){
    console.log("E Número é Primo!");
} else {
    console.log("E Número NÃO é primo!");
}

