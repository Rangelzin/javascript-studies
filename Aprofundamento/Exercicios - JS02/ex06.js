// Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const note = 10

switch (note) {
    case 0:
        console.log("Nota 0: Péssimo - Totalmente inadequado.");
    break;
    case 1:
        console.log("Nota 1: Muito ruim - Muito insatisfatório.");
    break;
    
    case 2:    
        console.log("Nota 2: Ruim - Insatisfatório.");
    break;
    
    case 3:    
        console.log("Nota 3: Regular - Nem bom, nem ruim.");
    break;

    case 4:    
        console.log("Nota 4: Bom - Satisfatório, com alguns pontos positivos.");
    break;

    case 5:    
        console.log("Nota 5: Muito bom - Bem acima da média.");
    break;

    case 6:    
        console.log("Nota 6: Ótimo - Muito bom, com poucos pontos a melhorar.");
    break;

    case 7:    
        console.log("Nota 7: Excelente - Quase perfeito, com pequenos detalhes a ajustar.");
    break;

    case 8:    
        console.log("Nota 8: Fantástico - Excelente, quase sem falhas.");
    break;

    case 9:    
        console.log("Nota 9: Incrível - Quase impecável, excepcional.");
    break;

    case 10:    
        console.log("Nota 10: Perfeito - Absolutamente impecável, sem falhas.");
    break;

    default:
        console.log("Nota inválida: Por favor, insira uma nota entre 0 e 10.");
    break;
}



