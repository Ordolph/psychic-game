// Global variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
var remGuesses = document.getElementById("remGuesses")
var guesses = document.getElementById("guesses")
var winsNum = 0;
var lossNum = 0;
var remGuessNum = 8;
var guessLetter = [];

// Starter lines for game
wins.textContent = "Wins: " + winsNum;
losses.textContent = "Losses: " + lossNum;
remGuesses.textContent = "Remaining Guesses: " + remGuessNum;
guesses.textContent = "Your Guesses: " + guessLetter;

console.log(randomLetter)

// GAME
document.onkeyup = function game(start) {

    var userGuess = start.key;

// Functions for game conditionals
    function win() {

        winsNum++;
        wins.textContent = "Wins: " + winsNum;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        remGuessNum = 8;
        remGuesses.textContent = "Remaining Guesses: " + remGuessNum;
        guessLetter = []
        guesses.textContent = "Your Guesses: " + guessLetter;

        console.log(randomLetter)
        console.log(remGuesses.textContent)
    }

    function lose() {

        lossNum++;
        losses.textContent = "Losses: " + lossNum;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        remGuessNum = 8;
        remGuesses.textContent = "Remaining Guesses: " + remGuessNum;
        guessLetter = []
        guesses.textContent = "Your Guesses: " + guessLetter;

        console.log(randomLetter)
    }

    function wrongGuess() {

        remGuessNum--;
        remGuesses.textContent = "Remaining Guesses: " + remGuessNum;
        guessLetter.push(start.key);
        guesses.textContent = "Your Guesses: " + guessLetter;
    }

// Game conditionals
    if (alphabet.includes(event.key) && guessLetter.indexOf(event.key) == -1) {

            if (randomLetter == userGuess) {

                win();
            }

            else if (remGuessNum == 0) {

                lose()
            }

            else {

                wrongGuess()
            }
            
    }

    console.log(userGuess)
}
    


