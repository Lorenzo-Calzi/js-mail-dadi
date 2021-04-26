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
    }
    
}

// Stampa un messaggio appropriato sull’esito del controllo