/*
    FOR EACH

*/ 

const students = [
    {name:"Rodolfo", age:25},
    {name:"Maria", age:43},
    {name:"Joao", age:21},
    {name:"Bruno", age:43},
    {name:"Carla", age:13},
    {name:"Ana", age:20},
    {name:"Julio", age:26},
];

// const averegeAge = allStudentsAge / students.length
// console.log(`A media dos alunos é de ${averegeAge.toFixed(0)}`)
let allStudentsAge = 0

students.forEach( function(student, index) {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e esta na posicao ${index} do Array`)
})
