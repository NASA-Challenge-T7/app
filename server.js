var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

app.get("/",function(req,res){
	res.sendfile(__dirname+"index.html");
})

var port = process.env.VCAP_APP_PORT || 3000;

app.listen(port, function(err){
   console.log(`app started and listening on port: ${port}`);
});
