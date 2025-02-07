
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 12
    
    msg.innerHTML = `Agora são ${hora}:00` 
    if (hora >= 0 && hora < 12){
        // BOM DIA!!
        document.body.style.background = '#F2D0A7'
        img.src = 'imagens/manha.png'
    } else {
        if (hora >= 12 && hora < 18){
            // BOA TARDE!!
            document.body.style.background = '#F28705'
            img.src = 'imagens/tarde.png'
        } else {
            // BOA NOITE!!
            document.body.style.background = '#273440'
            img.src = 'imagens/noite.png'
        }
    } 
}



 

