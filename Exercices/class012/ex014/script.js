function loading(){ 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date = new Date()
var hour = date.getHours()

msg.innerHTML = `It's now ${hour} o'clock`
if (hour >= 0 && hour < 12 ) {
    // Good Morning
    img.src = 'images/morning.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hour >= 12 && hour < 18){
    // Good Afternoon
    img.src = 'images/afternoon.jpg'
    document.body.style.background = '#b9846f'

} else {
    // Good Evening
    img.src = 'images/evening.jpg'
    document.body.style.background = '#515154'
}
}