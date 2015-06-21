//Bulls and cows
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
var number = getRandomInt(1000, 9999);
 
function occurrences(string, subString, allowOverlapping){

    string+=""; subString+="";
    if(subString.length<=0) return -1;

    var n=0, pos=0;
    var step=(allowOverlapping)?(1):(subString.length);

    while(true){
        pos=string.indexOf(subString,pos);
        if(pos>=0){ n++; pos+=step; } else break;
    }
    return(n);
}

function cowsAndBulls(number, guessed) {
	//Number of occurrences and the repeating chars (not to be double checked)
	var guessCharOccurences = "";
	var num = number.toString();
	var guess = guessed.toString();
	var cows = 0, bulls = 0;

	//Checking how much cows and bulls there are
	for(var i=0; i<guess.length; i++){
		var numOcc = 0;
		var guessOcc = occurrences(guess, guess.charAt(i));
		if (guessCharOccurences.search(guess.charAt(i)) == -1){
			if(num.search(guess.charAt(i))>-1){
				numOcc = occurrences(num, guess.charAt(i));
				if (numOcc>guessOcc)
					cows+=guessOcc;
				else
					cows+=numOcc;
			}
			guessCharOccurences+=guess.charAt(i);
		}
	}
	//Checking for bulls
	for(var i=0; i<guess.length; i++)
		if(guess.charAt(i)==num.charAt(i)){
			bulls++;
			break;
		}
	
	//Distinguishing cows from bulls
	cows-=bulls;

	console.log('Cows are %s',cows,' Bulls are ',bulls)
}

cowsAndBulls(1123, 1111)
function checkIfEqual(number) {

	

	var prompt = require('prompt');
	prompt.start();
	prompt.get(['guess'], function(err,result) {

	console.log('%s',result.guess)	
	if (number == result.guess) {
		console.log('Numbers are equal! %s%s', number,' ', result.guess)
	}
	else {
		console.log('Numbers are NOT equal! %s%s',number,' ', result.guess)
		cowsAndBulls(number, result.guess)
		checkIfEqual(number)
	}
	});
}

checkIfEqual(number);

/*var express = require('express')
var app = express()
	//Sending index.html to localhost, if the row is missing will send res.send('Hello World!')
    app.use(express.static('public'));
	app.get('/', function (req, res) {
	res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})*/

