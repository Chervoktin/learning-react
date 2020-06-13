var http = require('http');

var app = http.createServer(function(req,res){
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
app.listen(3001);
