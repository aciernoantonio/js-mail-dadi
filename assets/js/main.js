/* 
    parte della mail
*/

const mail_list = ["baby.yoda@gmail.com", "pincopallino@gmail.com", "fraccopacco@gmail.com"];

//chiedere all'utente la sua mail

alert("Benvenuto a Js Dice!");
let user_mail = prompt("Inserisci la tua mail");


//controlla che sia nella lista
if (mail_list.includes(user_mail)) {

    //stampa esito del controllo
    alert("La mail è presente nell'elenco");
} else {

    //stampa esito del controllo
    alert("La mail non è presente nell'elenco");
}




/* 
    gioco dei dadi
*/

//genera un numero random per giocatore
let user_num = Math.floor(Math.random() * 6) + 1;


//genera un numero random per computer
let cpu_num = Math.floor(Math.random() * 6) + 1;


//stabilire vincitore con valore più alto
if (user_num > cpu_num) {
    alert("L'utente ha vinto!");

} else if (user_num == cpu_num) {
    alert("Pareggio!");

} else {
    alert("Il computer ha vinto!");
}