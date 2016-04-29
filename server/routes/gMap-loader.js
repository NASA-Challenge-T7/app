var GoogleMapsLoader = require("gmaps");
var express = require('express');
var router = express.Router();

var myElement = angular.element("#map-canvas");
// var myOptions = {
//   zoom: 3,
//   center: myLatlng
// };

router.get('/gMap-loader', function (req, res) {

	GoogleMapsLoader.load(function(google) {
		var map = new GMaps({
		  el: myElement,
		  lat: -12.043333,
		  lng: -77.028333
		});
	});


    // awsProductsClient.call("ItemSearch", searchOptionsForName, function (err, searchResult) {
    //     if (err) {res.status(500).send('Error during product search');}
    //     return res.json(searchResult);
    // });

});
