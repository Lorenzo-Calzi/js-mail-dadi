/* EMAIL */

// Chiedi all’utente la sua email
var email = prompt('Inserisci la tua Email');

var userName = prompt('Inserisci il nome con il quale vuoi partecipare');
document.getElementById('user_name').innerHTML = 'Benevenuto ' + userName;

var verifiedEmail = ["lorenzocalzi@gmail.com", "email_1@gmail.com", "email_2@gmail.com", "email_3@gmail.com", "email_4@gmail.com"];

// Controlla che sia nella lista di chi può accedere
for (var i = 0; i < verifiedEmail.length; i++) {
    if (verifiedEmail[i] == email){
        document.getElementById('user_email').innerHTML = verifiedEmail[i] ;
        alert('Benvenuto!')
        break;
    }

    else{
        alert("ATTENZIONE! Non potrai riscuotere l'eventuale vincita poiché l'email inserita non è presente all'interno del nostro database.");
        break;
    }  
}

/* /EMAIL */

/* DADI */

//Generare un numero random da 1 a 6 sia per il giocatore sia per il computer
var userDie = Math.floor(Math.random() * 6) + 1;
document.getElementById('user_die').innerHTML = userName + ' ha giocato: ' + userDie;

var computerDie = Math.floor(Math.random() * 6) + 1;
document.getElementById('computer_die').innerHTML = 'Il computer ha giocato: ' + computerDie;

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDie > computerDie){
    document.getElementById('winner').innerHTML = 'Il vincitore è ' + userName;

} else if (userDie < computerDie ){
    document.getElementById('winner').innerHTML = 'Il vincitore è il Computer';


} else if (userDie == computerDie){
    document.getElementById('winner').innerHTML = 'La partita è finita in pareggio';
}

/* /DADI */