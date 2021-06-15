var numeriRandomPc = [];

while (numeriRandomPc.length < 5){
    var numeriRandom = Math.floor(Math.random()* 100) +1
    if(!numeriRandomPc.includes(numeriRandom)){
        numeriRandomPc.push(numeriRandom)
    }
}

alert('fai attenzione ai numeri' + numeriRandomPc)
var numeriInseritiGiocatore
setTimeout(function(){
    while (numeriInseritiGiocatore.length < numeriRandomPc){
        var numeriGiocatore = parseInt(prompt('inserire un numero dell alert'))
        if (numeriInseritiGiocatore.push(numeriGiocatore)){
            alert('continua')
        }
    }
})