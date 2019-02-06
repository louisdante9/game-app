var Word = require("./word.js");
var inquirer = require("inquirer")

var wordArray = ["cat", "dog", "beaver", "duck",
 "sloth", "ladybug", "stork", "dingo", "tapir", 
 "moose", "skink", "goose", "marmoset", 
 "dolphin"];
var randomWord = "";
var displayWord = "";
var finalWord;
var leftToGuess;
var lives = 6

function newGame() {
    // randomWord = "";
    var r = parseInt(Math.floor(Math.random() * (wordArray.length)))
    randomWord = wordArray[r]
    finalWord = new Word(randomWord)
    leftToGuess = finalWord.letterArr.length
}

function gameOver() {
    {
        console.log("Game over.")
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Would you like to play again?"
        }]).then(function (response) {
            if (response.playAgain) {
                newGame()
                print()
                askToGuess();
            } else {
                console.log("Ok, see you around!")
            }
        })
    }
}

function displayWords() {
    displayWord = finalWord.createWordString()
    console.log(displayWord);
    finalWord.compare = displayWord
}


function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalWord.guessCheck(input)
                displayWord = finalWord.createWordString()

                if (finalWord.compare === displayWord) {
                    console.log("Nope, there is no", input, "in the word")
                    lives--
                    console.log("You have", lives, "guesse(s) remaining.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        askToGuess()
                    }
                   
                } else {
                    console.log("Good choce!")
                    console.log(leftToGuess, 'this is a index')
                    leftToGuess--
                    print();
                    if (leftToGuess === 0) {
                        console.log("Great Job! Here's the next word:");
                        newGame()
                        print();
                        askToGuess();
                    } else {
                        askToGuess()
                    }
                }

            } else if (input.length === 0) {
                console.log("Please choose a letter.");
                askToGuess()
            } else {
                console.log("Pick one letter a a time please.")
                askToGuess()
            }

        } else {
            gameOver()
        }
    })
}

function print() {
    console.log("\n")
    console.log("******************************************")
    displayWords()
    console.log("\n*****************************************")
    console.log("\n")
}
newGame()
print()
askToGuess();