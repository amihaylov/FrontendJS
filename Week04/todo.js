var div = document.getElementById("container");

var buttonTodo = document.createElement("button");
buttonTodo.appendChild(document.createTextNode("Add Task"));
var inputField = document.createElement("input");
inputField.type = "text";

var textParagraph = document.createTextNode("Task: ");
var parUp = document.createElement("p");

parUp.appendChild(textParagraph);
parUp.appendChild(inputField);
parUp.appendChild(buttonTodo);
div.appendChild(parUp);

var todoList = document.createElement("ul");
div.appendChild(todoList);

buttonTodo.onclick = function(event) {
	var listItem = document.createElement("li");
	listItem.appendChild(document.createTextNode(inputField.value))
	todoList.appendChild(listItem);
}

