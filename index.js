var express = require('express');
var app = express();
var http = require('http');
var path = require('path');


var server = http.createServer(app);



app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) =>{
    res.render("index.html")
});

server.listen(3000, function() {
    console.log("Listening at port 3000");
});