// 1. List out the letters that the computer has to choose from. This is done by created an array.

var stringOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"];

// 2. Set the initial variable value

var wins = 0;
var losses = 0;
var guessesLeft = 9
var userGuess;
var comGuess;

// 3. Create an array that will contain the guessed letters. 

var guessedLetters = [];

// 4. Create a function that will allow the computer to chose a letter at random and store it. 
// 5. Create onkeyup that will contain a function that will lower case the letters, in case the user has the caps lock on or is pressing the shift key.

document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase()
    console.log(userGuess)
}

function computerGuess() {
    var rando = Math.floor(Math.random() * 26)
    comGuess = stringOfLetters[rando]
    console.log(comGuess)
}

// function game() {
    computerGuess()
    document.onkeyup = function (event) {
        // only accept the letters of the alphabet (do an if statement)
        // loop thru the alphabet array. if user guess === stringOfLetters[i]
        // give a message stating that this isn't a valid choice try again. 
        userGuess = event.key.toLowerCase()
        console.log(userGuess)
        if (comGuess === userGuess) {
            wins++;
            document.getElementById("wins").innerHTML = wins
            guessesLeft = 9
            document.getElementById("guessesLeft").innerHTML = guessesLeft
            //This is for feedback to user
            //<p id="message"></p>
           //document.getElementById("message").innerHTML = "You're Psychic!!!!!"

        }  
         else {
            guessesLeft -- 
            console.log("decrement",guessesLeft)
            document.getElementById("guessesLeft").innerHTML = guessesLeft
            check()
        }
    }

    function check() {
        if (guessesLeft === 0){
            console.log("lose", guessesLeft)
            losses++
            document.getElementById("losses").innerHTML = losses
            guessesLeft = 9
            document.getElementById("guessesLeft").innerHTML = guessesLeft
        }
    }