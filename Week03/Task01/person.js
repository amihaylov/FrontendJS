function Person(first, last) {
	this.getFirstName = function() {
		return first;
	}
	this.getLastName = function() {
		return last;
	}
}

var p1 = new Person("Ivan", "Ivanov");
console.log(p1.first); //Cannot access first, it is private
console.log(p1.last); //Same
console.log(p1.getFirstName); //Getter to access private
console.log(p1.getLastName);

//If we want sth to be private, we need to define it as argument or var inside function
//Public is when we attach it to this or prototype