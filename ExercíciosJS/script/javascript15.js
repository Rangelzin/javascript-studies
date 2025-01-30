function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fANO = document.getElementById('iano')
   var res = document.querySelector('#resultado')
   if (fANO.value.length == 0 || fANO.value > ano ) {
        alert('[ERROR!] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fANO.value) 
        var genero = 'none'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        
        res.innerHTML = `<p>Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong></p>`
        res.appendChild(img)
    }
}