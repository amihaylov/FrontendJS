var express = require('express')
var app = express()
	//Sending index.html to localhost, if the 2 rows below is missing will send res.send('Hello World!')
    app.set('view engine', 'jade');
    app.use(express.static('public'));
	app.get('/', function (req, res) {
		//Passing values Hey and Hello there to the variables title and message
		//inside index.jade (the default directory is views)
		res.render('index', { title: 'Hey', message: 'Hello there!'});
	//res.send('Hello World!')
	})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

