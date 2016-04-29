var express = require('express');
var amazonProductsRoute = require('./server/routes/amazon-products');
var pollenLoaderRoute = require('./server/routes/pollen-loader');


// ----------------------------------------------
// var GoogleMapsLoader = require('./server/routes/gMap-loader'); 
//
// var myElement = angular.element("#map-canvas");
// var myOptions = {
//   zoom: 3,
//   center: myLatlng
// };

// var GoogleMapsLoader = require('google-maps'); // only for common js environments 
 
// GoogleMapsLoader.load(function(google) {
// 	new google.maps.Map(myElement, myOptions);
// });
//
// app.use('/gMap', GoogleMapsLoader);
// ----------------------------------------------



var app = express();

app.use(express.static(__dirname + '/'));

app.get("/",function(req,res){
	res.sendfile(__dirname+"index.html");
});

app.use('/api', amazonProductsRoute);
app.use('/pollen', pollenLoaderRoute);


var port = process.env.VCAP_APP_PORT || 3000;

app.listen(port, function(err){
   console.log(`app started and listening on port: ${port}`);
});
