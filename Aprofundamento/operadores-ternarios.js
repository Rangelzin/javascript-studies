/*  OPERADORES TERNARIO ou CONDICIONAL

? se
: se nao

*/

const rain = true

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela)



// Preciso transferir meu dinheiro

    const balance = true
    const isNotBlocked = true
    const accountExist = false

    const transfOk = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

    console.log(transfOk)