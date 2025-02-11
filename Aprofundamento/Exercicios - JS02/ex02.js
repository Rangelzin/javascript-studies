// Faça um programa que verifica se uma pessoa é brasileira ou não.  DEVE SER UM OBJETO

const person = {
    name: 'Maria',
    country: 'Argentina'
}

if(person.country == 'Brasil'){
    console.log(`${person.name} é brasileira `)
} else {
    console.log(`${person.name} NAO é brasileira `)
}