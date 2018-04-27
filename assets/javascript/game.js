// 1. List out the letters that the computer has to choose from. This is done by created an array.

var lettersOfTheAlphabet = ["a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// 2. Set the initial variable value

var guessesLeft = 9
var wins = 0;
var losses = 0;

// 3. Create an array that will contain the guessed letters. 
var guessedLetters = [];

// var guessesLeft = null;
var lettersGuessed = function (name) {
    console.log(name);
}
lettersGuessed()
document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userguess);

    var computerGuess = options[Math.floor(Math.random() * options.length)];

    console.log(computerGuess);

    if (options <= (options.length - 1)) {
        documents.querySelector("options").innerHTML = "Final Score; " + score + " out of " + options.lenght;
    }

    // (userguess === "a", "e", "i", "o", "u") {
    // wins++;
}


            // document.onkeyup = function(event) {
            //     if (questionIndex === questions.length){
            //         return;
            //     }
            // }

            // var userInput = event.key.toLowerCase();
    
        