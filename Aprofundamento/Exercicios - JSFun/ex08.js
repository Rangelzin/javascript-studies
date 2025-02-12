/* 
Escreva um programa onde, você cria uma função geradora de desconto.
- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
- Os descontos funcionam da seguinte forma:
   x - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
   x - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
   x - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
   x - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto    
   x - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
   x - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
   x - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
   x - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
   x - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
   x - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto   
   x - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto

    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO

- A função deve imprimir na tela:
    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.

*/


function billDiscount(nameCustomer, valuePurchase, firstPurchase, payVista){

    const discount = 0

    if(firstPurchase && payVista && valuePurchase > 1000){
        const discount = 0.3
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (firstPurchase && payVista && valuePurchase < 1000 && valuePurchase > 500) {
        const discount = 0.25
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (firstPurchase && payVista && valuePurchase < 500){
        const discount = 0.20
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)


    } else if (firstPurchase && !payVista  && valuePurchase > 1000){
        const discount = 0.20
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (firstPurchase && !payVista  && valuePurchase > 1000){
        const discount = 0.20
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (firstPurchase && !payVista && valuePurchase < 1000 && valuePurchase > 500){
        const discount = 0.15
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (firstPurchase && !payVista && valuePurchase < 500){
        const discount = 0.10
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (!firstPurchase && payVista && valuePurchase > 1000){
        const discount = 0.20
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (!firstPurchase && payVista && valuePurchase < 1000 && valuePurchase > 500){
        const discount = 0.15
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)

    } else if (!firstPurchase && payVista && valuePurchase < 500){
        const discount = 0.10
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)
        
    } else if (!firstPurchase && !payVista && valuePurchase > 1000){
        const discount = 0.10
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)
        
    } else if (!firstPurchase && !payVista && valuePurchase > 500 && valuePurchase < 1000){
        const discount = 0.05
        const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        const discounteDPrice =  valuePurchase * (1-discount)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total sem desconto é R$${valuePurchase}, o valor total com desconto R$${discounteDPrice} e a porcentagem de desconto é ${formattedDiscount}%. VOLTE SEMPRE!`)
        
    } else if (!firstPurchase && !payVista && valuePurchase < 500){
        // const discount = 0.05
        // const formattedDiscount = parseFloat((discount * 100).toFixed(1));

        // const discounteDPrice =  valuePurchase * (1-discount)

        const cupom = Math.floor(Math.random()* ( 20 - 10) + 10)

        console.log(`OBRIGADO pela compra ${nameCustomer}! o valor total da sua compra é R$${valuePurchase},e voce ganhou um cupom de desconto de ${cupom}% na sua proxima compra conosco!. VOLTE SEMPRE!`)
    }
}

billDiscount("Joao", 300, false, false)