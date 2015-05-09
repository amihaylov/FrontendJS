 
function Person(name) {
  this.name = name;
}

Person.prototype.toString = function() {
  return "Hello, I am " + this.name;
}
// 1. First to "steal" this
// 2. Then "steal" prototype
function Student(name, fn) {
  Person.call(this, name);
  this.fn = fn;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.toString = function() {
	//Same as in java super.toString()
  return Person.prototype.toString.call(this) + " " + this.fn;
}

var p = new Person("Rado");
var s = new Student("Ivo", "800000");

console.log(p.toString());
console.log(s.toString());