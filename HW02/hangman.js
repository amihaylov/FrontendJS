var prompt = require('prompt');

//Hangman
//Now with working callbacks and everything!
var words =  ["banana","orange","apple","peach"];
var letters = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var lives = 7;
var visualizeGuess = "";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var randWordNum = getRandomInt(0, words.length);
for (var i = 0; i < words[randWordNum].length; i++)
		visualizeGuess += "_";

function displayAndInput(){
	console.log("\nGuess is: " + visualizeGuess);
	console.log("\nYou have " + (lives) + " lives left.");
	console.log("\nThe word doesnt contain the following letters so far: ");
		for (i = 0; i < 26; i++)
			if (letters[1][i]==2)
				console.log(letters[0][i] + " ");

	var letter;
	var validInput = false;
	
	prompt.start();
	prompt.get(['input'], function(err,result)  {
		letter = result.input;
		for (i = 0; i < 26; i++) 
			if (letter == letters[0][i])
				if (letters[1][i]==0)
					validInput = true;
		if (!validInput) {
			console.log("Letter is already said!");
			//Callback to main method if letter is already said
			displayAndInput();
		}
		else
			//Callback to match letter
			isLetterContained(letter);
	});
}

function isLetterContained(letter){
	var found = false;
	for (i = 0; i < words[randWordNum].length; i++) 
		if (letter == words[randWordNum].charAt(i)) {
			found = true;
			visualizeGuess = visualizeGuess.replaceAt(i, letter);
		}
	if (!found) {
		//Callback if result is negative
		doesNotContainLetter(letter);
	}
	else {
		//Callback if result is positive
		doesContainLetter(letter);
	}
}

function doesContainLetter(letter){
	for (j = 0; j < 26; j++) {
		if (letter == letters[0][j])
			letters[1][j] = 1;
	}
	if (visualizeGuess.search("_")> -1){
		//Callback to main method
		displayAndInput();
	}
	else{
		console.log("You have won the game!");
		return;
	}
}

function doesNotContainLetter(letter){
		lives-=1;
		for (j = 0; j < 26; j++) {
			if (letter == letters[0][j])
				letters[1][j] = 2;
		}
		if (lives > 0){
			//Callback to main method
			displayAndInput();
		}
		else{
			console.log("You have lost the game!");
			return;
		}
}

displayAndInput();