let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    let n = Number(num.value)
    if (isNumero(n) && !inLista(n, valores)) {
        alert(`Tudo ok!`)
    } else {    
        alert(`Valor inválido ou já encontrado no lista`)
    }
} 


