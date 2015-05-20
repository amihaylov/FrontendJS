function MainCtrl($scope){
	$scope.tasks = [];
	$scope.task = "";
	$scope.addTask = function(counter, task){
		$scope.tasks.push({id: counter, name: task});
		$scope.task = "";
		$scope.counter +=1;
	}

	$scope.deleteTask = function(index){
		$scope.tasks.splice(index,1);
		$scope.counter -=1;
	}

	$scope.editTask = function(index, task){
		$scope.tasks[index].name = task;
		console.log(task);
	}

} 
