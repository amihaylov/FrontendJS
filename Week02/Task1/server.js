//Bulls and cows
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
var number = getRandomInt(1000, 9999);
 
function cowsAndBulls(number, guessed) {
	var num = number.toString();
	var guess = guessed.toString();
	var cows = 0, bulls = 0;
	//When we have repetition of digits i.e. 1123, 1112 or 1231, first row is the repeated digits, second is number of occurences
	var offset = [[-1,-1,-1,-1],[0,0,0,0]];
	for (i = 0; i < num.length-1; i++)
		for (j = i+1; j < num.length; j++)
			if (num.charAt(i) == num.charAt(j)) {
				offset[0][i] = num.charAt(i);
				offset[1][i]++;
			}
	var notFound = 0;
	for (i = 0; i < num.length; i++) {
		for (j = 0; j<guess.length && notFound == 0; j++) {
			if (num.charAt(i) == guess.charAt(j)) {
				cows++;
				if (i==j) {
					cows--;
					bulls++;
					//Subtracting offset from cows, if needed
				}
				notFound = 1;	
			}
/*		for (k = 0; k < offset.length; k++) {
			if (num.charAt(i) == offset[0][k]) {
				cows-=offset[1][k];
			}
		}*/
		}
		notFound = 0;
	}
/*	if (cows > bulls)
		cows-=bulls;*/
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

