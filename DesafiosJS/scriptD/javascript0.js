function nacionalidade(){
    var pais = document.getElementById('ipais').value
    var res = document.querySelector('#ires')
    res.innerHTML = `<p>O seu país é <strong>${pais}</strong></p>`
if (pais == 'Brasil'){
    res.innerHTML += '<p>Você é <strong>Brasileiro!</strong></p>'
 } else {
    res.innerHTML += '<p>Você é <strong>Estrangeiro!</strong></p>'
}
}
