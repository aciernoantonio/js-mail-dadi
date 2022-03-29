/* 
    parte della mail
*/

const mail_list = ["baby.yoda@gmail.com", "pincopallino@gmail.com", "fraccopacco@gmail.com"];
console.log(mail_list);

//chiedere all'utente la sua mail

let user_mail = prompt("Inserisci la tua mail");
console.log(user_mail);

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

//genera un numero random per computer

//stabilire vincitore con valore più alto