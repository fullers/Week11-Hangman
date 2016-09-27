// Array to contain the words to randomly choose
var wordsArray = ["Hangman", "Divergent", "Insurgent", "Allegiant", "Aladdin", "Terminator"];

var word = wordsArray[getRandom(0,wordsArray.length)];

// getRandom chooses an random word from the Movie Title (wordsArray)
  function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

exports.randomWord = word;