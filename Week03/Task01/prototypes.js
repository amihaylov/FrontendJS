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
String.prototype.format = function(dict) {
  var result = this;

  if(typeof(dict) === "object") {
    Object.keys(dict).forEach(function(key) {
      result = result.replace("{" + key + "}", dict[key]);
    });
    return result;
  }

  var args = [];
  var n = arguments.length;
  var i = 0;

  for(i; i < n; i+=1) {
    args.push(arguments[i]);
  }

  var result = this;

  args.forEach(function(arg) {
    result = result.replace("{}", arg);
  });

  return result;
}


var result = "Hello there {name}! Do you speak {language}?".format(replaces);
console.log(result);

Array.prototype.head = function() {
	return this[0];
}

Array.prototype.tail = function(){
	var result = [];
	for(var i=1; i<this.length; i+=1)
		result.push(this[i]);
	return result;
}

Array.prototype.last = function() {
	return this[this.length - 1];
}

Array.prototype.range = function(start, end){
	var result=[];
	for(var i=start; i<end+1; i+=1)
		result.push(i);
	return result;
}

Array.prototype.range = function(start, end){
	var result=[];
	for(var i=start; i<end+1; i+=1)
		result.push(i);
	return result;
}

Array.prototype.sum = function(){
	var sum=0;
	for(var i=0; i<this.length; i+=1)
		if(typeof this[i] == "number")
			sum+=this[i];
	return sum;
}

Array.prototype.noFalsy = function(){
	var result = [];
	for(var i=0; i<this.length; i+=1)
		if(this[i])
			result.push(this[i]);
	return result;
}

Array.prototype.unique = function(){
   var duplicates = {}, result = [];
   for(var i = 0; i < this.length; ++i){
      if(duplicates.hasOwnProperty(this[i])) {
         continue;
      }
      result.push(this[i]);
      duplicates[this[i]] = 1;
   }
   return result;
}