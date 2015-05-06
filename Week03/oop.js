 //Creating objects directly with 
var obj = {
  	"firstName": "Anton",
  	"age": 27
  	"greet": function () {
  		//console.log(this.firstName)
  		return ["Hello this is", this.firstName, this.age].join(" ");
  }
}
//obj.greet();
console.log(obj.greet());
console.log(typeof(obj)); //Returns object 

//Constructor function, type is actually function
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.greet = function() {
		return this.name + " " + this.age;
	}
}

var rado = new Person("Anton", 27);
//typeof is object, HOWEVER instanceof is Person!

//So far cannot make proper inheritance
//Making it with prototypes, in this way all instances of the base class will see the methods. It is like nested Object
//It is accepted to use it for public properties.

Person.prototype.growOld = function() {
	return this.age ++;
}

var p1 = new Person("Ivan", 18);
