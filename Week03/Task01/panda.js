 function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

 function Panda(name, sex, weight) {
 	this.name = name;
 	if(["male", "female"].indexOf(sex) === -1){
 		sex = "female";
 	}
 	this.sex = sex;
 	this.alreadyLazy = 0;
 	this.weight = weight + 20;

 }
 Panda.prototype.isMale = function() {
 	if (this.sex == "male")
 		return true;
 	else
 		return false;
 }
 Panda.prototype.isFemale = function() {
 	if (this.sex == "female")
 		return true;
 	else
 		return false;
 }

 Panda.prototype.eat = function(bamboo) {
 	this.weight += bamboo/2;
 	if (this.weight>80 && !this.alreadyLazy) {
  		this.alreadyLazy = 1;
  		this.name +=" Lazy Panda";
  	}
 }
 Panda.prototype.mate = function(anotherPanda){
 	//
 	var fatherName = "";
 	var motherName = "";


 	if(this.isMale() && anotherPanda.isFemale()) {
 		fatherName = this.name;
 		motherName = anotherPanda.babyName;
 	} else if(this.isFemale() && anotherPanda.isMale()) {

 			}
 	else {
 		throw {
 			"name": "PandasCannotMate",
 			"message": "Cannot mate with same sex"
 		}
 	}
 	var babySex = ["male", "female"][getRandomInt(0,2)];
 	var babyName = {
 		"female": motherName + " " + fatherName,
 		"male": fatherName + " " + motherName
 	}[babySex];

 	return new Panda(babyName, babySex, 0);
 }

 Panda.prototype.toString = function() {
 	return ["Hello this is", this.name, this.sex, this.weight].join(" ");
 }

 var tonko = new Panda("Anton", "male", 0);
 console.log(tonko.toString());
 console.log(tonko.isMale());
 console.log(tonko.isFemale());
 tonko.eat(20);
 console.log(tonko.toString());
 tonko.eat(200);
 console.log(tonko.toString());
 tonko.eat(200);
 console.log(tonko.toString());

 var ani = new Panda("Ani", "female", 0);
 var baby = tonko.mate(ani);
 console.log(baby.toString());