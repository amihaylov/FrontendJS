var Q = require('q');


function Resource(url){
	this.url = url;
};

// api/students -> GET, POST
Resource.prototype.query = function() {
	return Q($.get(this.url));
};

//url is sth like http://192.168.0.1/students
Resource.prototype.create = function(data) {

// post, put & delete via
	return Q($.ajax({
		url: this.url, // api endpoint
		method: "post",          // method
		data: data,
		dataType: "json"        // data type
	}));
}

// api/students -> GET, PUT, DELETE
Resource.prototype.view = function(id) {
	return Q($.get(this.url +'/'+id);
}

Resource.prototype.update = function(id, data) {
	return Q($.ajax({
		url: this.url+'/'+id, // api endpoint
		method: "put",          // method
		data: data,
		dataType: "json"        // data type
	}));
}

Resource.prototype.delete = function(id) {
	return Q($.ajax({
		url: this.url+'/'+id, // api endpoint
		method: "delete",          // method
		data: data,
		dataType: "json"        // data type
	}));
}