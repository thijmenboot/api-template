var express = require('express');
var app = express();
const http = require('http').Server(app);

var router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

http.listen(process.env.PORT || 5000, () => {
  if (process.env.PORT !== undefined) {
    console.log("Server gestart op poort " + process.env.PORT);
  } else {
    console.log("Server gestart op poort 5000");
  }
});
module.exports = app;
