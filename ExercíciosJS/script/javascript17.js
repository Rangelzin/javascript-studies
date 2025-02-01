function contar(){
    var inicio = document.getElementById('init')
    var fim = document.getElementById('iend')
    var passo = document.getElementById('ipass')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:' 
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F603}`
        }
    }   
} 