var aws = require("aws-lib");
var express = require('express');

var awsProductsClient = aws.createProdAdvClient('AKIAJM23Y257YAY76M3Q', '+aKB5FT4QQ4YJJuN6UejHzVv5PbcyrDyF5Wno9de', 'ma033-22');
var router = express.Router();

var searchOptions = {SearchIndex: "Books", Keywords: "Javascript"};

router.get('/amazon-products', function (req, res) {
    awsProductsClient.call("ItemSearch", searchOptions, function (err, searchResult) {
        if (err) {res.status(500).send('Error during product search');}
        return res.json(searchResult);
    });
});

module.exports = router;