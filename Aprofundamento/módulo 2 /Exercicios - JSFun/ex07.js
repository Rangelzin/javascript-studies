/*

Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
    - Você deve enviar como argumentos da função
        - Valor inicial investido 
        - Valor atual do investimento
        - Tempo em meses, que o valor está investido
    - A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. 
    
    Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo

*/

function calculateInterestRate(i,a,t){
    const rate = (a - i)/(i * t)
    const result = rate * 100
    const result2 = parseFloat(result.toFixed(1));

    console.log(`A taxa de juros nesse investimento foi de ${result2}%`)
}

calculateInterestRate(2000,3600,24)