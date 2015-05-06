$(document).ready(function(){
  var count = 0;
	var $checkBoxEvent = $("input")
    $("button#submitButton").click(function(){
        var taskId = "task" + count;
        var $tasksList = $("ul.tasks-list");
        var $inputText = $("input#todoInput").val();
        var $taskItem = $("<li></li>").text($inputText).addClass("task-item");
        $taskItem.attr('id', taskId);

        var $checkBox = $("<input>").attr({
           name:  'myCheckbox'
          ,ref: taskId
          ,value: 'myValue'
          ,type:  'checkbox'
       	});

        $checkBox.addClass("itemNumber"+count);
        $taskItem.append($checkBox);
        $tasksList.append($taskItem);
        
        $checkBox.click(function() {
    			//Check if checked and add event. Use this for checking the object and not classes.
          var taskRef = $(this).attr('ref')

          console.log(taskRef);
          if($(this).prop('checked') === true)
            $("li#"+taskRef).css("text-decoration", "line-through");
          else
            $("li#"+taskRef).removeAttr("style");
          console.log($(this).prop('checked'));
          console.log($(this).attr('checked', true));
    		});
        count +=1;
    });
});