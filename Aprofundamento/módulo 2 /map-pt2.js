/* 
    MAP
      - Cria um novo array, a partir do array percorrido (original)
      - Cria um novo array, com a mesma quantidade de itens do array original
      - Aceita 3 parametros
        - item od array
        - index
        - array completo
        
        const numbers = [1,2,3,4]
        const students = [
    {name:"Rodolfo", age:25},
    {name:"Maria", age:43},
    {name:"Joao", age:21},
    {name:"Bruno", age:43},
    {name:"Carla", age:13},
    {name:"Ana", age:20},
    {name:"Julio", age:26},
];

const double = number => number * 2
const sum = number => number + 10
const minus = number => number - 2


// const double2 = function(number){
    //     return number * 2
    // }
    const newArray = numbers.map(double).map(sum).map(minus)
    
    console.log(newArray )
*/

// EXERCICIOS 

const list = [
    {name:"Rodolfo", vip:true},
    {name:"Maria", vip:false},
    {name:"Joao", vip:true},
    {name:"Bruno", vip:true},
    {name:"Carla", vip:false},
    {name:"Ana", vip:true},
    {name:"Julio", vip:false},
]

const newList = list.map((client)=>{
    const newList = {
        name: client.name, 
        vip: client.vip,
        sector:  client.vip ? 'Black' : 'Green'
    }
    return newList
})

console.log(newList)

const students = [
    {name:"Rodolfo", testGrade : 7 },
    {name:"Maria", testGrade : 5 },
    {name:"Joao", testGrade : 8 },
    {name:"Bruno", testGrade : 9 },
    {name:"Carla", testGrade : 3 },
    {name:"Ana", testGrade : 2 },
    {name:"Julio", testGrade : 10 },
]


const studentsR = students.map((finalResult) => {
    const result = {
        name: finalResult.name,
        finalResult: finalResult.testGrade >= 7 ? 'Aprovado' : 'Reprovado'
    }
    return result
} )

console.log(studentsR)