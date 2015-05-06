var TodoApp = (function() {
  // private vars
  var tasks = [];
  var index = 0;

  // store the reference with the jQuery selectors here
  var refs = {
    createTask: "input#addTask",
    container: "#container"
  }

  var addTask = function(taskName) {
    tasks.push({
    	id: index,
    	name: taskName,
    	finished: false
    });
    index +=1;
  };

  var finishTask = function(id) {
    tasks[id].finished = true;
  };

  var displayList = function() {
    var container = $("#container")
    
    // clear the contents
    container.empty();

    console.log(tasks);
    // loop through the tasks
    for (var i=0; i<tasks.length; i+=1)
      if (!tasks[i].finished){
        var taskItem = $("<li></li>").text(tasks[i].name).attr("id",tasks[i].id);
        var checkBox = $("<input>").attr({
           name:  'myCheckbox'
          ,ref: tasks[i].id
          ,value: 'myValue'
          ,type:  'checkbox'
        });
        taskItem.append(checkBox);
        container.append(taskItem);
      }
      //TODO Logic for checked
      $("input[type='checkbox']").click(function() {
          var taskRef = $(this).attr('ref');

          if($(this).prop('checked') === true) {
            $("li#"+taskRef).css("text-decoration", "line-through");
            finishTask(taskRef);
          }
          else {
            $("li#"+taskRef).removeAttr("style");
              tasks[taskRef].finished = false;
          }
      });
  };

  // public api
  return {
    addTask: addTask,
    finishTask: finishTask,
    displayList: displayList
  };
})();
 
