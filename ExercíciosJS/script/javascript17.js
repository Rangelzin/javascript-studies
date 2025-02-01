function contar(){
    var inicio = document.getElementById('init').value
    var fim = document.getElementById('iend').value
    var passo = document.getElementById('ipass').value
    var res = document.getElementById('res')

    res.innerHTML = `<p>Contando:</p>` 

    do{
        res.innerHTML = `${inicio}`
        inicio = inicio + passo
    }while (inicio <= fim);
} 