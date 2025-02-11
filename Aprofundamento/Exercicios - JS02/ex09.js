// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares. 

const values = [2,4,5,7]
let pair = []
let odd = []

for(let pos = 0; pos < values.length; pos++){
    if(values[pos]%2 == 0){
        pair.push(values[pos])
    } else{
        odd.push(values[pos])
    }
}

if(pair.length == 4){
    console.log(`TODOS OS NÚMEROS SÃO PARES.`)
} else if(odd.length == 4){
    console.log(`TODOS OS NÚMEROS SÃO IMPARES.`)
} else {
    console.log(`Há números pares e ímpares.`)
}