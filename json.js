var cors = require("cors");
var express = require("express");
var app = express();

let todos = [
  { id: 1, completed: false, title: "one" },
  { id: 2, completed: false, title: "too" },
  { id: 3, completed: false, title: "three" },
  { id: 4, completed: false, title: "four" },
  { id: 5, completed: false, title: "five" },
  { id: 6, completed: false, title: "six" },
];

const corsOptions = {
  origin: "http://localhost:3001", // домен сервиса, с которого будут приниматься запросы
  optionsSuccessStatus: 200, // для старых браузеров
};
app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json

app.get("/update", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify(todos));
});

app.post("/delete", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  let index = -1;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === req.body.id) {
      index = i;
    }
  }
  console.log(index);
  todos.splice(index, 1);
  console.log(todos);
  res.end(JSON.stringify([{ status: "ok" }]));
});

app.get("/test", function (req, res) {
  res.sendFile("/json.js", { root: __dirname });
});

app.post("/add", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  todos.push(req.body);
  res.end(JSON.stringify([{ status: "ok" }]));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
