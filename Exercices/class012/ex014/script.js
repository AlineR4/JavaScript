function loading(){ 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Its now ${hour} o'clock`
if (hour >= 0 && hour < 12 ) {
    // Good Morning
    img.src = 'morning.jpg'
} else if (hour >= 12 && hour < 18){
    // Good Afternoon
    img.src = 'afternoon.jpg'

} else {
    // Good Evening
    img.src = 'images/evening.jpg'
}
}