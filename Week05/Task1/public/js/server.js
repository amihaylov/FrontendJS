var express = require('express')
var app = express()
	//Sending index.html to localhost, if the row is missing will send res.send('Hello World!')
    app.use(express.static('public'));
	app.get('/', function (req, res) {
	res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

