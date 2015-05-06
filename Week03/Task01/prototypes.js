String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

var str = "test";
console.log(str.capitalize());

String.prototype.isBlank = function() {
	var foundSth = false;
	for (i = 0; i<this.length; i++)
		if(this.charAt(i)!=" ")
			foundSth = true;
	if (this == " " || !foundSth)
		return true;
	else
		return false;
}

var str2 = " ";
var str3 = "     ";
var str4 = "   a";
console.log(str2.isBlank());
console.log(str3.isBlank());
console.log(str4.isBlank());

String.prototype.words = function() {
	return this.trim().split(/\s+/);
}

var words = " This is    a   very   clever   sentence! ".words();
console.log(words);

var replaces = { "name": "Ivan", "language": "Bulgarian" };
//Not working

//variadic arguments, google it
String.prototype.format = function(obj) {

/*	var tempStr = this;
	Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  	//print(val + ' -> ' + obj[val]);
  		var matcher = "{" + val + "}";
  		var re = new RegExp(matcher, 'g');
		tempStr = tempStr.replace(re, obj[val]);
	});
	return this;
*/}

var result = "Hello there {name}! Do you speak {language}?".format(replaces);
console.log(result);