


// creating an array of option for the computer

var options = ["a", "e", "i", "o", "u"];
var guessedLetters = [];
var guessesLeft = 9
var wins = 0;
var losses = 0;
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