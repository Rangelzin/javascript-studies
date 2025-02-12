// Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.


function table(n){
    if( n < 1 || n > 10){
        console.log(`O numero ${n} e invalido`)
        return
    } else {
        for (let i = 1; i <= 10; i++) {
            const multi = n * i
            console.log(`${n} x ${i} = ${multi}`)
        }
    }
}


table(0)