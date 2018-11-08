var userInput = "";
var remaining = 10;
var wins = 0;
var losses = 0;
var remaining = 10;
var userInputDisplay = document.getElementById("displayUserInput");
var winsDisplay = document.getElementById("displayWins");
var lossesDisplay = document.getElementById("displayLosses");
var remainingDisplay = document.getElementById("displayRemaining");
var inputArr = [];
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ind = Math.floor(Math.random() * (abc.length + 1));
var compGuess = "";

document.onkeyup = function (event) {
    userInput = event.key.toLocaleLowerCase();
    inputArr.push(userInput);
    ind = Math.floor(Math.random() * (abc.length + 1));
    compGuess = abc[ind];
    if (compGuess == userInput) {
        wins = wins + 1;
        remaining = 10;
        inputArr = [];
    }
    if (compGuess != userInput) {
        remaining = remaining - 1;
        if (remaining <= 0) {
            losses = losses + 1;
            remaining = 10;
            inputArr = [];
        }
    }
    remainingDisplay.textContent = remaining;
    userInputDisplay.textContent = inputArr.join(", ");
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
};