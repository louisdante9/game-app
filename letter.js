
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.guessCheck = function(userInput) {
        if (userInput === this.letter) {
            this.guessed = true
        }
    }
    this.returnChar = function () {
        if (this.guessed === false) {
            return "_"
        } else {
            return this.letter
        }
    }
}
module.exports = Letter