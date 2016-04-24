var express = require('express');

var app = express();

app.use(express.static('client'));

var port = process.env.VCAP_APP_PORT || 3000;

app.listen(port, function(err){
   console.log(`app started and listening on port: ${port}`);
});