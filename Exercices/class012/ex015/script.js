function verificar() {
var data= new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.lenght == 0 || fano.value > ano) {
    window.alert('[ERROR] Check the data and try again')
} else {
    window.alert('tudo ok')
}
}