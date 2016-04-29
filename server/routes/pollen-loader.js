
var request = require('request');
var express = require('express');
var router = express.Router();



var loc_lat = process.argv[2] || '51.7546407';
var loc_long = process.argv[3] || '-1.2510746';
var base_url = 'https://socialpollencount.co.uk/api/forecast?location=';
var url = base_url+'['+loc_lat+','+loc_long+']';

var today = new Date().toISOString().substr(0,10);

if ( !String.prototype.contains ) {
    String.prototype.contains = function() {
        return String.prototype.indexOf.apply( this, arguments ) !== -1;
    };
}

console.log('Latitude: ', loc_lat);
console.log('Longitude: ', loc_long);

router.get('/pollen-loader', function (req, res) {
    console.log('Requested');
    request(
        {
            url: url,
            json: true
        },
        function (error, res, body) {
            if (!error && res.statusCode === 200) {
                body.forecast.forEach(function (item) {
                    if (item.date.contains(today)) {
                        console.log('Pollen level: ', item.pollen_count);
                        // return res.json(item);
                        // return item;
                    }
                });
            }
            if (error) {
                console.log('Something went wrong...');
                console.log(error);
            }
        }
    );
});




// router.get('/amazon-products/name', function (req, res) {
//     awsProductsClient.call("ItemSearch", searchOptionsForName, function (err, searchResult) {
//         if (err) {res.status(500).send('Error during product search');}
//         return res.json(searchResult);
//     });
// });


module.exports = router;