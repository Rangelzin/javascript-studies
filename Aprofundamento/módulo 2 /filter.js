/* 
FIlTER
- Cria um novo array, a partir do array percorrido (original)
- Cria um novo array APENAS com os elementos filtrados
- Aceita 3 parametros
- item od array
- index
- array completo



const list = [
    {name:"Rodolfo", vip:true},
    {name:"Maria", vip:false},
    {name:"Joao", vip:true},
    {name:"Bruno", vip:true},
    {name:"Carla", vip:false},
    {name:"Ana", vip:true},
    {name:"Julio", vip:false},
]

const justVips = list.filter(client => {
    return client.vip
})

console.log(justVips)

const students = [
    {name:"Rodolfo", testGrade : 7 },
    {name:"Maria", testGrade : 5 },
    {name:"Joao", testGrade : 8 },
    {name:"Bruno", testGrade : 9 },
    {name:"Carla", testGrade : 3 },
    {name:"Ana", testGrade : 2 },
    {name:"Julio", testGrade : 10 },
]

const newStudentsList =  students.filter (student => {
    return student.testGrade < 7
})

console.log(newStudentsList)

*/


//Exercicios 


const list = [20,3,234,12,17,541,6,87,275,1000];

const newList = list.filter( numbers => {
    if(numbers % 2 != 0) return false
    if(numbers % 5 != 0) return false

    return true
})

console.log(newList)

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
  ];

const newCompanies = companies.filter( companies => {
    if(companies.foundedOn > 1975 && companies.marketValue > 200) return true
    else return false
})

console.log(newCompanies)
