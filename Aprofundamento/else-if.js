/* CONTROLE DE FLUXO - CONDICIONAIS - ELSE/IF

if = se
else = se nao 
else if = mais se...

*/

const temperature = 32

if(temperature >= 36 && temperature <= 39){
    console.log('Pessoa esta saudavel!')
} else if(temperature > 39){
    console.log('Pessoa esta com febre!')
} else{
    console.log('Pessoa esta hipotermia!')
}