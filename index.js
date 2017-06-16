var express = require("express");
var app     = express();
var path    = require("path");
var favicon = require('serve-favicon')

//use static files
app.use(express.static(path.join(__dirname, 'www')));

//favicon
app.use(favicon(path.join(__dirname+'/www/assets/img/logo75.png')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/www/magnet.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/cloud',function(req,res){
  res.sendFile(path.join(__dirname+'/www/cloud.html'));
});

app.get('/star',function(req,res){
  res.sendFile(path.join(__dirname+'/www/star.html'));
});

app.get('/youtube',function(req,res){
  res.sendFile(path.join(__dirname+'/www/youtube.html'));
});

app.get('/solid',function(req,res){
  res.sendFile(path.join(__dirname+'/www/solid.html'));
});

app.get('/snow',function(req,res){
  res.sendFile(path.join(__dirname+'/www/snow.html'));
});

app.get('/image',function(req,res){
  res.sendFile(path.join(__dirname+'/www/image.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});