var express = require("express");
var app = express();
var todoRoutes = require("./routes/todos");
var bodyparser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.get("/" , function(req,res){
	res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes);

app.listen(3000,function(){
	console.log("Server is good")
})