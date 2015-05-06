var div = document.getElementById("container");

var buttonA = document.createElement("button");
var buttonB = document.createElement("button");
var textButtonA = document.createTextNode("Team A");
var textButtonB = document.createTextNode("Team B");

buttonA.appendChild(textButtonA);
buttonB.appendChild(textButtonB);

var textTeamA = document.createTextNode("Team A Score:");
var textTeamB = document.createTextNode("Team B Score:");

var parA = document.createElement("p");
var parB = document.createElement("p");
parA.appendChild(textTeamA);
parB.appendChild(textTeamB);

buttonA.onclick = function(event) {
	scoreA +=1;
	textTeamA.textContent = ("Team A Score: " + scoreA);
}

buttonB.onclick = function(event) {
	scoreB +=1;
	textTeamB.textContent = ("Team B Score: " + scoreB);
}

var parButton = document.createElement("p");
div.appendChild(parButton);
div.appendChild(parA);
div.appendChild(parB);

parButton.appendChild(buttonA);
parButton.appendChild(buttonB);

var scoreA = 0;
var scoreB = 0;
//Better solution at Github