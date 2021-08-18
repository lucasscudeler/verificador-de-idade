function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/img/bebe-m.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', './assets/img/jovem-m.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', './assets/img/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', './assets/img/idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/img/bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './assets/img/jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './assets/img/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', './assets/img/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}