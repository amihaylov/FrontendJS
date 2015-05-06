"use strict"
$(document).ready(function(){
	var words =  ["banana","orange","apple","peach"];
	var letters = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
	var MAX = 7;
	var deathCount = 0;
	var underscoreCount;

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
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

	var wordNum = getRandomInt(0, words.length);
	var outputElem = $("#output");
	var output = "";

	for (var i=0; i<words[wordNum].length; i+=1){
		output +="_";        
	}
	console.log(output);
	console.log(words[wordNum]);
	
	outputElem.val(output);
	underscoreCount = words[wordNum].length;

	$("button").click(function() {
		if (deathCount == MAX)
			alert("You have lost!");
		if (underscoreCount == 0)
			alert("You have won!");
		if ((deathCount != MAX) && (underscoreCount != 0))
			alert("You have " +(MAX - deathCount)+" lives left!")

		var exclusionString = "The word does not contain the following letters: ";
		for (i = 0; i < 26; i++)
			if (letters[1][i]==2)
				exclusionString += letters[0][i];
		var exclusionElem = $("#exclusion");
		exclusionElem.val(exclusionString);

		var letter = $("#letter-input").val();
		var validInput = false;
		for (i = 0; i < 26; i++) 
			if (letter == letters[0][i])
				if (letters[1][i]==0)
					validInput = true;
		if (!validInput) {
			alert("Letter is already said!");
		}

		matchLetter(letter, words[wordNum], output);
		console.log(output);
		
		setTimeout(function timer() {
			console.log('You clicked the button!');    
		}, 2000);
	});
});