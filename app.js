const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
var config=require('./config');
var register=require('./controllers/register-controller.js');
var login=require('./controllers/login-controller.js');


var app=express();
app.set('view engine','ejs');
app.use(express.static('./stylesheets'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));




mongoose.connect('mongodb://localhost:27017/testa',{useNewUrlParser:true});
var conn=mongoose.connection;
let gfs;
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  
});

// Create storage engine
const storage = new GridFsStorage({
  url: "mongodb://localhost/testa",

});
const upload = multer({ storage });


app.get('/',(req,res)=>{
  res.render('index');
});
app.post('/upload' , upload.array('myfile',2) ,function(req,res){
  res.render('upload');
});

app.post('/',register.register);
app.post('/userdesk',login.login);
app.get('/userdesk',function(req,res){
  res.render('userdesk');
});

app.get('/contact',function(req,res){
 res.render('contact');
});


app.get('/premium',function(req,res){
  res.render('premium');
});
app.get('/userdesk2',(req,res) => {
  res.render('userdesk2');
});
app.get('/rihanna',function(req,res){
  res.render('rihanna');
});
app.get('/zayn',function(req,res){
  res.render('zayn');
});
app.get('/akon',function(req,res){
  res.render('akon');
});
app.get('/katy',function(req,res){
  res.render('katy');
});
app.get('/snake',function(req,res){
  res.render('snake');
});
app.get('/jb',function(req,res){
  res.render('jb');
});
app.get('/sam',function(req,res){
  res.render('sam');
});
app.get('/jlopez',function(req,res){
  res.render('jlopez');
});
app.get('/eminem',function(req,res){
  res.render('eminem');
});
app.get('/jlopez',function(req,res){
  res.render('jlopez');
});
app.get('/taylor',function(req,res){
  res.render('taylor');
});
app.get('/adele',function(req,res){
  res.render('adele');
});
app.get('/lgaga',function(req,res){
  res.render('lgaga');
});
app.get('/selena',function(req,res){
  res.render('selena');
});
app.get('/mj',function(req,res){
  res.render('mj');
});
app.get('/ed',function(req,res){
  res.render('ed');
});
app.get('/bruno',function(req,res){
  res.render('bruno');
});
app.get('/drake',function(req,res){
  res.render('drake');
});
app.get('/alan',function(req,res){
  res.render('alan');
});
app.get('/camila',function(req,res){
  res.render('camila');
});
app.get('/shawn',function(req,res){
  res.render('shawn');
});


app.get('/lovet',function(req,res){
  gfs.files.findOne({filename:'a10d952ef3e0e5d49d888df84c3f0545.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/smack',function(req,res){
  gfs.files.findOne({filename:'fe025acc3b037306e73dd82a0a0a0196.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/rap',function(req,res){
  gfs.files.findOne({filename:'f69578c0a4f0ad41df57c98e1b73447d.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/what',function(req,res){
  gfs.files.findOne({filename:'a286779b8318c12a2c79a3c0a5ddbe72.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/floor',function(req,res){
  gfs.files.findOne({filename:'a286779b8318c12a2c79a3c0a5ddbe72.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/swish',function(req,res){
  gfs.files.findOne({filename:'658c41b0f633dc7073f71ed7049810f0.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/dusk',function(req,res){
  gfs.files.findOne({filename:'fed80b0bb96ee9c192d2837c76076bd0.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/blank',function(req,res){
  gfs.files.findOne({filename:'7f93f13e16c9b414e74f419e2e13bcd4.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/taki',function(req,res){
  gfs.files.findOne({filename:'855611440fe08a3ef4a8c02b4366d25e.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/dance',function(req,res){
  gfs.files.findOne({filename:'ade1118d6d5d650699c3e6073c344956.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});

app.get('/hello',function(req,res){
  gfs.files.findOne({filename:'7e81a83357d307039c754160fd432658.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/bad',function(req,res){
  gfs.files.findOne({filename:'215f35bb5ca9b071945d7f4dc9355f6a.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/wolves',function(req,res){
  gfs.files.findOne({filename:'cf4872fac8f9fb34d88a6e82478570ba.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/danger',function(req,res){
  gfs.files.findOne({filename:'d2f3a06cbee3308713505bf716768868.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/perfect',function(req,res){
  gfs.files.findOne({filename:'096f39090aa0fa30705ccdc2611e9656.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/just',function(req,res){
  gfs.files.findOne({filename:'2dd25f1641c46adfc75f5fcaf968f902.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/god',function(req,res){
  gfs.files.findOne({filename:'33ef42aad37d4f15d030cd8b262af2f7.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/spectre',function(req,res){
  gfs.files.findOne({filename:'0e5cc8e3ad51d93266f84a9d6e329baf.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/havana',function(req,res){
  gfs.files.findOne({filename:'64313b6336dd901e3de3c5003e302257.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});
app.get('/senorita',function(req,res){
  gfs.files.findOne({filename:'75e9390f69251f2475e618d4308af34b.mp3'},function(err,file){
    if(!file||file.length===0)
    {
      res.send("file not exists");
    }
    if(file.contentType==="audio/mp3")
    {
      var readstream=gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
    else {
      res.send("NOt an Audio file");
    }
  });
});







app.listen(3000,(err)=>{
  if(err)
  {
    console.log("error" +err.message);
  }
  else {
    console.log("listening to port 3000 successfully");
  }
});
