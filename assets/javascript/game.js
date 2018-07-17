

var computerchoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];

var restart = function() {
    guesses = 9;
    guessed = [];
    document.getElementById("lettersguessed").innerHTML = "Letters Guessed: "
    document.getElementById("guesses").innerHTML = "Guesses Remaining: 9 "
}


document.onkeyup = function (event) {
    var userguess = event.key.toLowerCase();

    var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];

    if ((userguess === "a") || (userguess === "b") || (userguess === "c") || (userguess === "d") || (userguess === "e") || (userguess === "f") || (userguess === "g") || (userguess === "h") || (userguess === "i") || (userguess === "j") || (userguess === "k") || (userguess === "l") || (userguess === "m") || (userguess === "n") || (userguess === "o") || (userguess === "p") || (userguess === "q") || (userguess === "r") || (userguess === "s") || (userguess === "t") || (userguess === "u") || (userguess === "v") || (userguess === "w") || (userguess === "x") || (userguess === "y") || (userguess === "z")) {

        if (guesses > 0) {
            if ((userguess === computerguess)) {
                wins++;
                alert("Congratulations you win!")
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                restart();

            }
            else if (guesses > 0) {
                guessed.push(userguess);
                guesses--;
                
                document.getElementById("lettersguessed").innerHTML = "Letters Guessed:  " + guessed;
                
                document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guesses;
            }
         if (guesses === 0) {
                losses++
                alert("Sorry try again!")
                document.getElementById("losses").innerHTML = "Losses: " + losses;
                restart();
            }
        }

    }

}


