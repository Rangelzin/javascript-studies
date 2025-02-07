function tabuada() {
    var num = document.getElementById('inum')
    var tabuada = document.getElementById('tabuada')

    if (num.value.length == 0){
        alert('Digite novamente!')
    } else {
        var n = (num.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    } 
}