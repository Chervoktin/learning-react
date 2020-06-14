var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.end(JSON.stringify([
        { id: 1, completed: false, title: "one" },
        { id: 2, completed: false, title: "too" },
        { id: 3, completed: false, title: "three" },
        { id: 4, completed: false, title: "four" },
        { id: 5, completed: false, title: "five" },
        { id: 6, completed: false, title: "six" },
      ]));
});


app.get('/test', function(req, res) {
  res.sendFile('/json.js' , { root : __dirname});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});