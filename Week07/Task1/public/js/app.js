var StudentsApp = (function() {

/* var addStudent = function(student) {
    //var test = {id: "kiro2", name: "Kiro Ananasov", email: "kiro@test.com"};
    $.ajax({
      type: "POST",
      url: '/students',
      data: student
    });
  };*/
  
//The native AJAX call
  var addStudent = function(student) {
    var xhr = new XMLHttpRequest;
    xhr.open("POST", "/students");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert(xhr.responseText);
        }
        else if(xhr.status != 200){
          alert('Request failed.  Returned status of ' + xhr.status);
          console.log('Ready state is '+xhr.readyState);
        }
    }
    xhr.send(JSON.stringify(student));
  };

/*  //TODO Make selector for id
  var updateStudent = function(student) {
    $.ajax({
      type: "PUT",
      url: '/students/' + student.id,
      data: student
    });
  };*/

//The native AJAX call
  var updateStudent = function(student) {
    var xhr = new XMLHttpRequest;
    xhr.open("PUT", "/students/" + student.id);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert(xhr.responseText);
        }
        else if(xhr.status != 200){
          alert('Request failed.  Returned status of ' + xhr.status);
          console.log('Ready state is '+xhr.readyState);
        }
    }
    xhr.send(JSON.stringify(student));
  };

/*  //TODO Make selector for id
  var deleteStudent = function(student) {
    $.ajax({
      type: "DELETE",
      url: '/students/' + student.id,
      data: student
    });
  };*/

  //The native AJAX call
  var deleteStudent = function(student) {
    var xhr = new XMLHttpRequest;
    xhr.open("DELETE", "/students/" + student.id);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          alert(xhr.responseText);
        }
        else if(xhr.status != 200){
          alert('Request failed.  Returned status of ' + xhr.status);
          console.log('Ready state is '+xhr.readyState);
        }
    }
    xhr.send();
  };

  /*var displayList = function() {

    $.get( "/students", function( data ) {
      $( ".result" ).html( data );
      var container = $("#students-database > tbody");
      container.empty();

      //Add the database
      for (var i=0; i<data.length; i+=1){
        //Add classes TODO!
        var row = $("<tr></tr>");
        var cellId = $("<td></td>").text(data[i].id);
        var cellName = $("<td></td>").text(data[i].name);
        var cellEmail = $("<td></td>").text(data[i].email);
        row.append(cellId).append(cellName).append(cellEmail);
        container.append(row);
      }

    },"json");
    
  };*/

  //The native AJAX call
  var displayList = function() {

    var xhr = new XMLHttpRequest;
    xhr.open("GET", "/students");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            var container = $("#students-database > tbody");
            container.empty();

            //Add the database
            for (var i=0; i<data.length; i+=1){
              //Add classes TODO!
              var row = $("<tr></tr>");
              var cellId = $("<td></td>").text(data[i].id);
              var cellName = $("<td></td>").text(data[i].name);
              var cellEmail = $("<td></td>").text(data[i].email);
              row.append(cellId).append(cellName).append(cellEmail);
              container.append(row);
            }
        }
        else if(xhr.status != 200){
          alert('Request failed.  Returned status of ' + xhr.status);
          console.log('Ready state is '+xhr.readyState);
        }
    }
    xhr.send();
    
  };

  //Testing submitting and receiving data from frontend to backend
  var test = function(message) {

    var xhr = new XMLHttpRequest;
    xhr.open("POST", "/test");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            var container = $("#students-database > tbody");
            container.empty();

            //Add the database
            for (var i=0; i<data.length; i+=1){
              //Add classes TODO!
              var row = $("<tr></tr>");
              var cellId = $("<td></td>").text(data[i].id + 'test');
              var cellName = $("<td></td>").text(data[i].name);
              var cellEmail = $("<td></td>").text(data[i].email);
              row.append(cellId).append(cellName).append(cellEmail);
              container.append(row);
            }
        }
        else if(xhr.status != 200){
          alert('Request failed.  Returned status of ' + xhr.status);
          console.log('Ready state is '+xhr.readyState);
        }
    }
    xhr.send(JSON.stringify(message));      
  };

  // public api
  return {
    addStudent: addStudent,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent,
    displayList: displayList,
    test: test
  };
})();
 
