//Users table

var arrayUsers = [{id:"", name:"", email:""}];
var prompt = require('prompt');
var jf = require('jsonfile');

function listTable() {
	console.log("id\t | name\t | email\t")
	console.log("-----------------------------------")
	arrayUsers.forEach(function(x){
		console.log(x.id + "\t |" + x.name + "\t |" + x.email);
	});
}

function addRecord() {
	//var prompt = require('prompt');
	//prompt.start();
	console.log("Type in id, name and mail to add a new user.")
	prompt.get(["id", "name", "email"], function(err,result) {
		arrayUsers.push({id: result.id, name: result.name, email: result.email});
		promptQuit();
	});

}

function getRecord() {
	var found = false;
	console.log("Type in key and value.")
	prompt.get(["key", "value"], function(err,result) {
		if(arrayUsers[0].hasOwnProperty(result.key)) {
				switch(result.key) {
					default:
						console.log("Error in method get!")
					case("id"):
						for(i = 0; i < arrayUsers.length; i++)
							if(arrayUsers[i].id == result.value) {
								found = true;
								console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
							}
						break;
					case("name"):
						for(i = 0; i < arrayUsers.length; i++) 
							if(arrayUsers[i].name == result.value) {
								found = true;
								console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
							}
						break;
					case("email"):
						for(i = 0; i < arrayUsers.length; i++)
							if(arrayUsers[i].email == result.value) {
								found = true;
								console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
							}
						break;
				}
		}
		else
			console.log("No suchget key in table!")
		if(!found)
			console.log("No such value in key!")
		promptQuit();
	});
}

function saveFile() {
	//Overwriting any existing file
	var jf = require('jsonfile')
 
	var file = 'data.json'
 
	jf.writeFile(file, arrayUsers, function(err) {
  	console.log(err)
  	promptQuit();
	})
}

function searchRecord() {
	var found = false;
	console.log("Type in key and value to search for.")
	prompt.get(["key", "value"], function(err,result) {
		if(arrayUsers[0].hasOwnProperty(result.key)) {
				switch(result.key) {
					default:
						console.log("Error in method get!")
					case("id"):
						for(i = 0; i < arrayUsers.length; i++)
							if(arrayUsers[i].id.search(result.value)>-1) {
								found = true;
								console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
							}
						break;
					case("name"):
						for(i = 0; i < arrayUsers.length; i++) 
							if(arrayUsers[i].name.search(result.value)>-1) {
								found = true;
								console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
							}
						break;
					case("email"):
						for(i = 0; i < arrayUsers.length; i++)
							if(arrayUsers[i].email.search(result.value)>-1) {
								found = true;
								console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
							}
						break;
				}
		}
		else
			console.log("No such key in table!")
		if(!found)
			console.log("No such value in key!")
		promptQuit();
	});
}

//TODO TEST DELETE !
function deleteRecord() {
	console.log("Type in id, the account(s) matching this id will be deleted.")
	prompt.get(["id"], function(err,result) {
		for (i = 0; i < arrayUsers.length; i++)
			if(arrayUsers[i].id == result.id)
				arrayUsers.splice(i, 1);
		promptQuit();
	});
}

function editRecord() {
	var found = false;
	console.log("Type in id to search for, then name and mail to edit.")
	prompt.get(["id", "name", "email"], function(err,result) {
		for(i = 0; i < arrayUsers.length; i++)
			if(arrayUsers[i].id == result.id) {
				found = true;
				arrayUsers[i].name = result.name;
				arrayUsers[i].email = result.email;
				console.log(arrayUsers[i].id + "\t |" + arrayUsers[i].name + "\t |" + arrayUsers[i].email)
			}
		if(!found)
			console.log("No such id!")
		promptQuit();
	});
}

function openFile() {
	// Might need jQuery to parse JSON file into objects.

	var jf = require('jsonfile')
	var util = require('util')
 
	var file = 'data.json'
	jf.readFile(file, function(err, obj) {
	  //console.log(util.inspect(obj))
	  var text = util.inspect(obj);
	  arrayUsers = text.map(JSON.parse);
	  //or arrayUsers = JSON.parse(text)
	  console.log(text);
	  promptQuit();
	});
/*	$.getJSON('data.json', function(data) { 
    arrayUsers = data;
    LOOKS LIKE JQUERY
  }); */
	var db = [];
	db = readFileSync(file);
}

function promptQuit() {
	//prompt.start();
	console.log("Type 'a' to add items, 'd' to delete a record by id, 'e' to edit record by id, 'g' to get, 'l' to list all items, 'o' to open file, 's' to save file, 'f' to search and 'q' to quit. ")
	prompt.get(['choice'], function(err,result) {
		console.log('%s',result.choice)	
		switch(result.choice) {
			case('a'):
				addRecord();
				break;
			case('d'):
				deleteRecord();
				break;
			case('e'):
				editRecord();
				break;
			case('f'):
				searchRecord();
				break;
			case('g'):
				getRecord();
				break;
			case('l'):
				listTable();
				promptQuit();
				break;
			case('o'):
				openFile();
				break;
			case('s'):
				saveFile();
				break;
			case('q'):
				break;
			default: 
				console.log("Invalid choice!")
				promptQuit();
				break;
		}
	});
}
promptQuit();