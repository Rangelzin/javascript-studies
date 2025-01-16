var agora = new Date()
var hora = agora.getHours() 
console.log(`Agora são exatamente ${hora}:00`)
if (hora > 6 && hora < 12) {
    console.log('BOOOM DIIIA!')
} else if (hora > 12 && hora <= 18) {
    console.log('BOOOAA TAARDEE!')
} else if(hora > 18 && hora <= 23) {
    console.log('BOOOAA NOOITEE!')
} else if(hora >= 0 && hora <= 6){
    console.log('BOOOAA MADRUGADA!, vai dormir!')
} 