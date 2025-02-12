/* 

A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 
        - média do salário da população; 
        - média do número de filhos; 
        - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    -Faça isso usando uma função!
*/

const inhabitantes = [
  {
    name: "Maria",
    wage: 7650,
    children: 3,
  },
  {
    name: "João",
    wage: 1518,
    children: 5,
  },
  {
    name: "Pedro",
    wage: 9220,
    children: 1,
  },
];

function data() {
    let bigger = inhabitantes[0].wage;
    let sumWage = 0
    let averageWage = 0
    let sumChildren = 0
    let averageChildren = 0


    for (let pos in inhabitantes) {
        sumWage += inhabitantes[pos].wage
        if (inhabitantes[pos].wage > bigger) bigger = inhabitantes[pos].wage;
    }
    
    for (let pos in inhabitantes) sumChildren += inhabitantes[pos].children
    
    averageWage = sumWage / inhabitantes.length
    averageChildren = sumChildren / inhabitantes.length

    console.log(`A media de salarios desses ${inhabitantes.length} funcionarios e de R$${averageWage.toFixed(0)}`)
    console.log(`A media de filhos desses ${inhabitantes.length} e de ${averageChildren.toFixed(0)} filhos por funcionario`)
    console.log(`E o maior salario e R$${bigger}`)
}
  
data();
