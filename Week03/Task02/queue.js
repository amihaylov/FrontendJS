/*function Queue() {
	var queue  = [];
  	var offset = 0;
	this.pushQueue = function(item) {
		queue.push(item);
	}
	this.popQueue = function() {
		if (queue.length == 0) return undefined;
		var item = queue[offset];

    	// increment the offset and remove the free space if necessary
    	if (++ offset * 2 >= queue.length){
      		queue  = queue.slice(offset);
      		offset = 0;
    	}

    	return item;
	}
	this.isEmpty = function() {
		return(queue.length == 0);
	}
	//NOT GOING TO WORK since queue[] is visible only in the function.
	this.getQueue = function() {
		return this.queue;
	}
} 

var obj1 = new Queue();
obj1.pushQueue(1);
obj1.pushQueue("asasda");
console.log(obj1.getQueue);
console.log(obj1.isEmpty());
obj1.popQueue();
console.log(obj1.getQueue);
obj1.popQueue();
console.log(obj1.isEmpty());*/

//One instance of object
var queue = (function() {
	var queueArr  = [];
  	var offset = 0;

  	return {
  		"pushQueue": function(item) {
  			queueArr.push(item);
  		},
  		"popQueue": function() {
  			if (queueArr.length == 0) return undefined;
			var item = queueArr[offset];

    		// increment the offset and remove the free space if necessary
    		if (++ offset * 2 >= queueArr.length){
      			queueArr  = queueArr.slice(offset);
      			offset = 0;
    		}

    		return item;
  		},
  		"isEmpty": function() {
  			return(queueArr.length == 0);
  		},
  		"getQueue": function() {
  			return queueArr;
  		}
  	}
}) ();

queue.pushQueue(1);
queue.pushQueue("asdasd");
console.log(queue.getQueue());
queue.popQueue();
console.log(queue.getQueue());
queue.popQueue();
console.log(queue.isEmpty());

/*Better will be to make all the functions private and in the public just declare them: 
return {
	"pop": pop,
	"push": push,
	"isEmpty": isEmpty
}
It is the same as above, but more clear to read */

//IIFE Pattern
var eventBus = (function(){
	var eventTable = {};
	function on(event, callback) {
		if(typeof(eventTable[event]) === "undefined") {
			eventTable[event] = [];
		}
		eventTable[event].push(callback);
	}
	function trigger(event) {
		var events = eventTable[event] || [];
		//For each event return the callback
		events.forEach(function(callback) {
			callback();
		});
	}

	function remove(event) {
		delete eventTable[event];
	}
	return {
		"on": on,
		"trigger": trigger,
		"remove": remove
	}

}) ();

/*	var b;
	var a = b || "asad"; 
	Which basically means that if b is undefined a will accept "asad" */