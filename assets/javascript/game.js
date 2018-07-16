

var computerchoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];


document.onkeyup = function (event) {
    var userguess = event.key;

    var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];

    if ((userguess === "a") || (userguess === "b") || (userguess === "c") || (userguess === "d") || (userguess === "e") || (userguess === "f") || (userguess === "g") || (userguess === "h") || (userguess === "i") || (userguess === "j") || (userguess === "k") || (userguess === "l") || (userguess === "m") || (userguess === "n") || (userguess === "o") || (userguess === "p") || (userguess === "q") || (userguess === "r") || (userguess === "s") || (userguess === "t") || (userguess === "u") || (userguess === "v") || (userguess === "w") || (userguess === "x") || (userguess === "y") || (userguess === "z")) {

        if (guesses > 0) {
            if ((userguess === computerguess)) {
                wins++;
                alert("You win")
                document.querySelector("#wins").innerHTML = "wins: " + wins;
               
            }
            else if (guesses > 0) {
            guessed.push(userguess);
            guesses--;
            document.querySelector("#lettersguessed").innerHTML = "guessed " + guessed;

            }
        }
    }

}


