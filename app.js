var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
res.sendfile('public/index.html');
});

app.get('/proj',function(req,res){
	
});

var port = 80
app.listen(port, function(){

})