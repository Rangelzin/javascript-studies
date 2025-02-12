/*

FUNCOES / FUNCTIONS

arguments and parameters

*/

function sum(number1, number2){ // VOID = vazia
    const result = number1 + number2
    return result
}

// sum(5,8)
// sum(2,3) // chama a funcao

const numberOne = 10
const numberTwo = 20

console.log(`O primeiro numero e ${numberOne}`)
console.log(`O segundo numero e ${numberTwo}`)
console.log(`A soma dos numeros e ${sum(numberOne,numberTwo)}`)

