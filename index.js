const express = require('express');
const app = express();
const fs = require("fs");

app.get('/', function (req, res) {
  fs.readFile( __dirname +'/produtos.json', 'utf8', function (err, data) {
       res.send(data);
       res.end( data );
   });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});