var now = new Date()
var hour = now.getHours()
console.log(`Agora são extamanete ${hour} horas`)
if (hour <= 12){
    console.log('Bom dia!') 
} else {
    if (hour <  18) {
    console.log('Boa tarde!')
    }
 else if (hour > 18)
console.log('Boa noite!')
}