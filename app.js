// var http = require('http');
// var fs = require('fs')

// http.createServer(function(req,res){
//   fs.readFile('helloworld.html',function(err,data){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello Yunnus!');
// }).listen(8080);
// const info = require("./info");
// info("Goku",100);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   // res.write("Hell!!");
//   res.end();
// }).listen(8080);

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);


// var fs = require('fs');

// fs.appendFile('do.html','Hellw!',function(err){
//   if(err) throw err;
//   console.log("saved!");
// })
// fs.open('do2.txt','w',function(err){
//   if(err) throw err;
//   console.log("sve");
// })


// fs.unlink("do.txt",function(err){
//   if(err) throw err;
//   console.log("del");
// })

// makeinh a sever based on path with error handling

var http = require('http');
var url = require('url');
var fs = require('fs');

// var add = "http://localhost:8080/default.htm?year=2017&month=february";

// var q = url.parse(add,true);

// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query;  //this return obj of the search
// console.log(qdata.year);

// http.createServer(function(req,res){
//   var q = url.parse(req.url,true);
//   var filename = "." +q.pathname;

//   fs.readFile(filename,function(err,data){
//     if(err){
//       res.writeHead(404,{'Content-Type':'text/html'})
//       return res.end("404 not found")

//     }
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

//installing the npm package for using in node
var uc = require('upper-case');

// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'text/html'})
//   res.write("hella")
//   res.write(uc.upperCase("heelll"));
//   res.end()
// }).listen(8080);

// learning of node events

var rs = fs.createReadStream("./do2.txt");

// rs.on("open",function(){
//   console.log("the file is opened");
// })

//learngin the events of node built_in

var events = require('events');
var eventEmitter =new events.EventEmitter();

// creating a event handler

var eventHandler = function(){
  console.log("I want to play hard");
}

//assigning a eventHandler to an evenyt
eventEmitter.on("hard",eventHandler);
//fire the evenu
eventEmitter.emit('hard');