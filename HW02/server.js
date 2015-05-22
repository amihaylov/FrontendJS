var prompt = require('prompt');

//Hangman
//TODO Check week2/task02 for prompting!!!
//Closer, but not yet there. inputLetter should be main method
var words =  ["banana","orange","apple","peach"];
var letters = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var MAX = 7;
var deathCount = 0;
var underscoreCount; 

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Not necessary anymore, see hangman()
function initializeString(string, lengthOfStr) {
	for (i = 0; i < lengthOfStr; i++)
		string += "_";
}

function matchLetter(letter, word, guess) {
	var found = false;
	for (i = 0; i < word.length; i++) 
		if (letter == word.charAt(i)) {
			found = true;
			guess.charAt(i) = letter;
		}
	if (!found) {
		deathCount++;
		for (j = 0; j < 26; j++) {
			if (letter == letters[0][j])
				letters[1][j] = 2;
			else
				console.log("Something is wrong with your method");
		}
	}
	else {
		underscoreCount--;
		for (j = 0; j < 26; j++) {
			if (letter == letters[0][j])
				letters[1][j] = 1;
			else
				console.log("Something is wrong with your method");
		}
	}
}

function inputLetter(cb) {
	var letter;
	var validInput = false;
	
	prompt.start();
	prompt.get(['input'], function(err,result)  {
		console.log('%s',result.input);
		letter = result.input;
		for (i = 0; i < 26; i++) 
			if (letter == letters[0][i])
				if (letters[1][i]==0)
					validInput = true;
		if (!validInput) {
			console.log("Letter is already said!");
			cb(false);
		}
		else
			cb(letter);
	});
}
//console.log(inputLetter());
function hangman () {
	var randWordNum = getRandomInt(1, words.length);
	var visualizeGuess;
	underscoreCount = words[randWordNum].length;
	for (var i = 0; i < words[randWordNum].length; i++)
		visualizeGuess += "_";

	if(deathCount < MAX && underscoreCount > 0) {
		var letter = inputLetter();
		matchLetter(letter, words[randWordNum], visualizeGuess);

		console.log(visualizeGuess);
		console.log("You have ", MAX - deathCount," lives left.");
		console.log("The word doesnt contain the following letters so far: ");
		for (i = 0; i < 26; i++)
			if (letters[1][i]==2)
				console.log(letters[0][i]," ");
	}
	var gameStatus = 0; // 0 continue game, 1 win, 2 loose
	
	if (deathCount == MAX)
		gameStatus = 2;

	if (underscoreCount == 0)
		gameStatus = 1;

	switch (gameStatus) {
		default:
		case(0):
			hangman();
			break;
		case(1):
			console.log("You win!");
			break;
		case(2):
			console.log("You loose!");
			break;
	}
}

hangman();