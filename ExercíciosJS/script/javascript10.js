function calcular(){
    var txtv = document.querySelector('#txtvel')
    var res = document.querySelector('#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua Velocidade atual é de <strong> ${vel}Km/h</strong>`
    if (vel > 80) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`

}
