var express = require('express');
var app = express();

app.use('./', function (req, res, next) {
	next();
});

app.get('/', function(request, response) {
  response.sendFile('./index.html' , { root : __dirname});
  response.sendFile('./images/elepant.png', {root : __dirname});
  response.sendFile('./style.css', {root: __dirname});
});

app.listen(process.env.PORT || 8888);
