var express = require('express');
var nodemailer = require("nodemailer");
var app = express();

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {

    }
});



app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
res.sendfile('public/index.html');
});

app.get('/send',function(req,res){
var mailOptions={
   to : 'ressdana@gmail.com',
   subject : req.query.subject,
   text : req.query.text
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
});

var port = 80
app.listen(port, function(){

})