var gamejs = require('./game.js');

var randomWord = gamejs.randomWord;

//console.log(randomWord);

var prompt = require("prompt");
prompt.start();

var Word = require("./word.js");

var game = {
  //wordBank: ["Work","Experience","Excellent","Test"],
  guessesRemaining : 10,
  currentWrd : null,
  startGame : function(wrd){
    //var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    //console.log(randomWord); // Comment out after testing
    this.currentWrd = new Word(randomWord);
    this.currentWrd.getLets();
    this.keepPrompting(); 
  },

  keepPrompting: function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result) {
      console.log("The Letter or space you guessed is: "+result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

      console.log("Guess: "+findHowManyOfUserGuess);
      
      if(findHowManyOfUserGuess === 0) {
        console.log("Your guess is not correct!");
        self.guessesRemaining -= 1;
        console.log("Guesses remaining: "+ self.guessesRemaining);   
        self.keepPrompting(); 

      } else {
        console.log("You guessed correctly!");
        if (self.currentWrd.didWeFindTheWord()) {
          console.log("You Won!!!");
          return 1;
        }else {
          console.log("Guesses remaining: "+ self.guessesRemaining);
          //console.log(self.currentWrd.wordRender());
          if (self.guessesRemaining >= 0 && self.currentWrd.found === false){
            self.keepPrompting();
          } else {
            if (self.guessesRemaining === 0){
              console.log("Game Over!"); 
              console.log("The word you trying to guess was: "+self.randomWord);
            }else {
              console.log(self.currentWrd.wordRender());
            }
          }
        }
      }
    });
  }
}
game.startGame();