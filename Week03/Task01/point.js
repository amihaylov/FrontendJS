function MutablePoint(x, y, z) {
	this.getX = function() {
		return x;
	}
	this.getY = function() {
		return y;
	}
	this.getZ = function() {
		return z;
	}
	this.move = function(dx, dy, dz) {
		x+=dx;
		y+=dy;
		z+=dz;
	}
}
MutablePoint.prototype.toString = function() {
	return ["(", this.getX(), this.getY(), this.getZ(),")"].join(" ");
}

function ImmutablePoint(x, y, z) {
	this.getX = function() {
		return x;
	}
	this.getY = function() {
		return y;
	}
	this.getZ = function() {
		return z;
	}
}

ImmutablePoint.prototype.move = function(dx, dy, dz) {
	return new ImmutablePoint(this.getX + dx, this.getY + dy, this.getZ + dz);
}

ImmutablePoint.prototype.toString = function() {
	return ["(", this.getX(), this.getY(), this.getZ(),")"].join(" ");
}

var p1 = new MutablePoint(0,0,0);
console.log(p1.toString());

p1.move(1,1,1); 
console.log(p1.toString());

var p2 = new ImmutablePoint(0, 0, 0);

var result = p2.move(0, 0, -1);

p2.getX() == 0; // true
p2.getY() == 0; // true
p2.getZ() == 0; // true


result.getZ() == -1; // true

console.log(p2.toString()); // == "(0, 0, 0)"  true
console.log(result.toString());// == "(0, 0, 0)" true, awkward