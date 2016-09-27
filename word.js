var gamejs = require('./game.js');

var selectedWord = gamejs.randomWord;

function wordcheck (userinput, genword) {
	this.userinput = userinput;
	this.genword = genword
};

console.log(selectedWord);