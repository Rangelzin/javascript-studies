/* Array

    Array - METODOS

    
    
    */
   
// push
// length
// sort
// delete
   
   const students = ['Joao', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']
   // delete students[0]
   
   students.push('Rodolfo')
   
   console.log(students.length)
   //console.log(students.sort())
   
// splice (unir/ligar)
// slice (fatiar)
// pop
// shift
   
   students.splice(1,1,'Vinicius')
   const newStudents = students.slice(1) // cria uma novo array = nova variavel
   console.log(newStudents)
   students.pop()
   students.shift()

   console.log(students)
