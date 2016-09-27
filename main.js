var inquirer = require('inquirer');

var gamejs = require('./game.js');

var selectedWord = gamejs.randomWord;


console.log(selectedWord);



var userinput = [];
var count = 0;

function Guess(letter){
	this.name = letter;
}

var userInput = function() {
	if (count <= 10) {
		inquirer.prompt([{
			name: "letter",
			message: "Checking Letter...",
			type: "input",
		}]).then(function(answers) {
			var guessedLetters = new Guess(answers.letter);
			userinput.push(guessedLetters);
		})
	}
}

userInput();