var Letter = require("./letter.js")


function Word(word) {
    this.letterArr = [];
    this.compare = "";
    for (var i = 0; i < word.length; i++) {
        this.letterArr.push(new Letter(word[i]))
    }
    this.createWordString = function () {
        var finalWordString = "";
        for (var j = 0; j < this.letterArr.length; j++) {
            finalWordString += this.letterArr[j].returnChar() + " ";
        }
        return finalWordString
    }
    this.guessCheck = function (userInput) {
        for (var x = 0; x < this.letterArr.length; x++) {
            this.letterArr[x].guessCheck(userInput)
        }
    }

}

module.exports = Word;