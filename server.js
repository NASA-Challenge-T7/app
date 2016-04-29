
var express = require('express');
var amazonProductsRoute = require('./server/routes/amazon-products');
var pollenLoaderRoute = require('./server/routes/pollen-loader');


var path = require('path');
var express = require('express');
var amazonProductsRoute = require('./server/routes/amazon-products');

var app = express();

var port = process.env.PORT || 3000;
 app.use(express.static(__dirname + '/'));

 app.get("/",function(req,res){
	res.sendfile(__dirname+"index.html");
 });

app.use('/api', amazonProductsRoute);
app.use('/pollen', pollenLoaderRoute);

app.listen(port, function() {
  console.log('listening');
});