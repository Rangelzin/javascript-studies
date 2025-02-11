/* CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE

*/

const temperature = 32

switch (temperature) {
    case 30:
        console.log('Pessoa esta com hipotermia severa!')
    break;

    case 33:
        console.log('Pessoa esta com hipotermia leve!')
    break;

    case 36:
        console.log('Pessoa esta saudavel!')
    break;

    default:
        console.log('Temperatura nao encontrada!')
    break;
}