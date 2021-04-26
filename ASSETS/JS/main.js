/* EMAIL */

// Chiedi all’utente la sua email
var email = prompt('Inserisci la tua Email')
console.log(email);

var verifiedEmail = ["email_1@gmail.com", "email_2@gmail.com", "email_3@gmail.com", "email_4@gmail.com", "email_5@gmail.com"]
console.log(verifiedEmail);

// Controlla che sia nella lista di chi può accedere
for (var i = 0; i < verifiedEmail.length; i++) {
    if (verifiedEmail[i] == email){
        document.getElementById('user_email').innerHTML = 'La tua email è: ' + verifiedEmail[i] + ' ed è presente nel nostro database.'
        break;
    }

    else{
        alert("L'email inserita non è presente all'interno del database.")
        break;
    }  
}


/* DADI */

//Generare un numero random da 1 a 6 sia per il giocatore sia per il computer
var userDie = Math.floor(Math.random() * 6) + 1;
console.log(userDie);

var computerDie = Math.floor(Math.random() * 6) + 1;
console.log(computerDie);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDie > computerDie){
    console.log("Ha vinto l'utente: " + userDie);

} else if (userDie < computerDie ){
    console.log("Ha vinto il computer: " + computerDie);

} else if (userDie == computerDie){
    console.log('Pareggio');
}