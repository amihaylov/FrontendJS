"use strict"
// on document ready
$( document ).ready(function(){
   // init stuff here

   // bind add task to TodoApp.addTask
   $("button#addTaskButton").click(function(){
   	var taskName = $("input#taskName").val();
   	TodoApp.addTask(taskName);
   	TodoApp.displayList();
   })
})


