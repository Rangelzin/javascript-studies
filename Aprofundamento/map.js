/* 
    MAP
      - Cria um novo array, a partir do array percorrido (original)
      - Cria um novo array, com a mesma quantidade de itens do array original
      - Aceita 3 parametros
        - item od array
        - index
        - array completo
*/

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

// const newArray = numbers.map((number) =>{
//     return number * 2
// })

 
// console.log(newArray)

const newStudents = students.map((student) =>{
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5   
    }
    return newStudent
})

console.log(newStudents)