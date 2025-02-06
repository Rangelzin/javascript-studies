let num = document.getElementById('num') // numero que foi coletado pelo input
let lista = document.getElementById('lista') // lista que sera colocada no select
let res = document.getElementById('res') // elemento que irá mostrar o resultado
let valores = [] // variavel composta 

function isNumero(n){
    if (n >= 1 && n <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else { 
        return false
    }
}
function adicionar() {
    let n = Number(num.value) // formatar o valor de entrada para numero

    if(isNumero(n) && !inLista(n, valores)){ // verificacao de numeros
        valores.push(n)
        let item = document.createElement('option') // cria um novo item
        item.text = `Numero ${n} adicionado!`
        lista.appendChild(item)
        res.innerHTML = '' // limpa o resultado
    } else {
        alert('[ERROR] Numero invalido  ou numero ja digitado!') 
    }
    num.value = ''
    num.focus()
}

function finalizar (){
    if (valores.length == 0) {
        alert('[ERROR] Nao ha numeros digitados!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / valores.length
        
        res.innerHTML = ''
        res.innerHTML += `<p>O <strong>total</strong> de numeros e/sao <strong>${total}</strong></p>`
        res.innerHTML += `<p>O <strong>maior</strong> numero desses valores e <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O <strong>menor</strong> numero desses valores e <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A <strong>soma</strong> dos valores e <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A <strong>media</strong> dos valores e <strong>${media}</strong></p>`
    }
}

function redefinir(){
    valores = []
    lista.innerHTML = ''
    res.innerHTML = ''
    num.value = ''
    num.focus() 
}
