// // Un alert() espone 5 numeri generati casualmente.
// // Da li parte un timer di 30 secondi.
// // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono 
// stati individuati.

function generaNumRandom (min, max){

    return Math.floor(Math.random() * ( max - min + 1)) + min;
}
listaNumAlert =[];

for(x = 1; x <= 5; x++){
    let num = generaNumRandom(1,100);
    listaNumAlert.push(num);

}
alert(listaNumAlert);

let secondi = 5;
let numeriInseriti = [];

setTimeout(function(){
    for(x = 1; x <= 5; x++){
        let inserisciNum = parseInt(prompt('inserire i 5 numeri'));
        numeriInseriti.push(inserisciNum);
    }
}, secondi * 1000);


    



