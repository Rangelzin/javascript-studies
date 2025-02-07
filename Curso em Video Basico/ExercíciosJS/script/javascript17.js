function contar() {
    let inicio = document.getElementById('ni')
    let fim = document.getElementById('nf')
    let passo = document.getElementById('np')
    let res = document.getElementById('res')

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Dados insuficientes!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... </br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if ( p <= 0 ){
            alert('Passo inválido!')
        }


        if (i < f) {
            for(let c = i ; c <= f ; c += p ){
                res.innerHTML += `${c}\u{1F4CC} `
            }
        } else {
            for(let c = i ; c >= f ; c -= p ){
                res.innerHTML += `${c}\u{1F4CC} `
            }
        }
    }
}


// USOS EQUIVALENTES

/*
    let c = i

    res.innerHTML += `${c} `
    while (c <= f){
        c += p
        res.innerHTML += `${c} `
    }
*/  