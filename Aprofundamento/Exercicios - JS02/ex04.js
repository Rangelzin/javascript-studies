// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const myNumber = [10, 900, 30];
let maior = myNumber[0];
let menor = myNumber[0];

for (let pos in myNumber) {
  if (myNumber[pos] > maior) maior = myNumber[pos];
  if (myNumber[pos] < menor) menor = myNumber[pos];
}

console.log(`O numero desses valores e ${maior}`);
console.log(`O numero desses valores e ${menor}`);
