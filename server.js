var express = require('express');
var amazonProductsRoute = require('./server/routes/amazon-products');

var app = express();

app.use(express.static(__dirname + '/'));

app.get("/",function(req,res){
	res.sendfile(__dirname+"index.html");
});

app.use('/api', amazonProductsRoute);


var port = process.env.VCAP_APP_PORT || 3000;

app.listen(port, function(err){
   console.log(`app started and listening on port: ${port}`);
});
