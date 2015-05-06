var express = require('express')
var app = express()
	//Sending index.html to localhost, if the 2 rows below is missing will send res.send('Hello World!')
app.set('view engine', 'jade');
app.use(express.static('public'));
app.get('/', function (req, res) {
	//Passing values Hey and Hello there to the variables title and message
	//inside index.jade (the default directory is views)
	res.render('index');
//res.send('Hello World!')
})

// listen for files: /post -> /views/post.jade
app.get("/:fileName", function(req, res, next){
  if(req.params && req.params.fileName){
    var fileName = req.params.fileName.replace(".html","");

    // if jade file exists
    if(fs.existsSync(__dirname+"/views/"+fileName+".jade")){
      res.render(fileName);
    // if post is in posts
    } else {
      next();
    }

  } else {
    next();
  }
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})