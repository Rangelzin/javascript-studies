 // Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem

const myNumber = 2
const randomNumber = Math.floor(Math.random() * ((10 - 1) * 1))

if(myNumber > randomNumber){
    console.log(`Parabens! Seu número é ${myNumber} e o número aleatório é ${randomNumber}, como seu número é maior, você acabou de ganhar R$1.000.000!`)
} else {
    console.log(`Infelizmente seu número é ${myNumber} e o número aleatório é ${randomNumber}, como seu número é menor ou igual, você ganhou nada! Tente novamente!`)
}

