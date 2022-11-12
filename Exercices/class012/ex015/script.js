function verificar() {
var data= new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.lenght == 0 || fano.value > ano) {
    window.alert('[ERROR] Check the data and try again')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'images/bebe menino.webp' )
        } else if ( idade < 21){
            //jovem
            img.setAttribute('src', 'images/jovem homem.jpg' )
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'images/adulto homem.webp' )
        } else {
            //idoso
            img.setAttribute('src', 'images/idoso homem.jpg' )
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'images/bebe menina.jpeg' )  
        } else if ( idade < 21){
            //jovem
            img.setAttribute('src', 'images/jovem mulher.jpg' )
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'images/adulta mulher.jpeg' )
        } else {
            //idoso
            img.setAttribute('src', 'images/idosa mulher.jpg' )
        }
    }
    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}
}