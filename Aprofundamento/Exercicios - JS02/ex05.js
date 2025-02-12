/*[ ] Crie 5 objetos nesse formato 

{
    nome: "" 
    idade:"" 
    sexo:"" 
    profissão: "" 
    nacionalidade:""
}

Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

*/

const person = {
  name: "Maria",
  age: 17,
  sex: "male",
  profession: "Advogado",
  nationality: "Brasileira",
};

if (person.age >= 18 && person.nationality == "Brasileira") {
  console.log(
    `o CANDIDATO(A) ${person.name} esta APROVADO(A) no processo seletivo.`
  );
} else {
  console.log(
    `o CANDIDATO(A) ${person.name} esta REPROVADO(A) no processo seletivo.`
  );
}
