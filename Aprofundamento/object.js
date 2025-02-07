/* Object

    Propriedades : valor
    marca : Sansung
    cor : azul
    tamanho : 75"

    nome : JOSE
    idade : 32
    altura : 1.84m
 */

    const person = {
        name: "Jose",
        age: 32,
        sex: "masculino",
        height: 1.84,
        adress: {
            street: "Rua dos Bobos",
            number: 123,
            country: "Brazil",
            city: "São Paulo",
            state: "SP"
        }
    } 

    console.log(person.adress.state);