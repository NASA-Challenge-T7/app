var aws = require("aws-lib");
var express = require('express');

var awsProductsClient = aws.createProdAdvClient('AKIAJM23Y257YAY76M3Q', '+aKB5FT4QQ4YJJuN6UejHzVv5PbcyrDyF5Wno9de', 'ma033-22');
var router = express.Router();

// var searchOptions = {SearchIndex: "Books", Keywords: "Javascript"};
// var searchOptions = {SearchIndex: "HealthPersonalCare", Sort: "salesrank", Keywords: "throat", ResponseGroup:""};
var searchOptionsForName = {SearchIndex: "HealthPersonalCare", Sort: "salesrank", Keywords: "throat",  ResponseGroup: "Small, Images, OfferListings, EditorialReview"};

router.get('/amazon-products/name', function (req, res) {
    awsProductsClient.call("ItemSearch", searchOptionsForName, function (err, searchResult) {
        if (err) {res.status(500).send('Error during product search');}
        return res.json(searchResult);
    });
});

var searchOptionsForURL = {SearchIndex: "HealthPersonalCare", Sort: "salesrank", Keywords: "throat"};

router.get('/amazon-products/link', function (req, res) {
    awsProductsClient.call("ItemSearch", searchOptionsForURL, function (err, searchResult) {
        if (err) {res.status(500).send('Error during product search');}
        return res.json(searchResult);
    });
});

var searchOptionsForImage = {SearchIndex: "HealthPersonalCare", Sort: "salesrank", Keywords: "throat", ResponseGroup: "Images"};

router.get('/amazon-products/img', function (req, res) {
    awsProductsClient.call("ItemSearch", searchOptionsForImage, function (err, searchResult) {
        if (err) {res.status(500).send('Error during product search');}
        return res.json(searchResult);
    });
});

var searchOptionsForPrice = {SearchIndex: "HealthPersonalCare", Sort: "salesrank", Keywords: "throat",  ResponseGroup: "OfferListings"};

router.get('/amazon-products/price', function (req, res) {
    awsProductsClient.call("ItemSearch", searchOptionsForPrice, function (err, searchResult) {
        if (err) {res.status(500).send('Error during product search');}
        return res.json(searchResult);
    });
});

var searchOptionsForDesc = {SearchIndex: "HealthPersonalCare", Sort: "salesrank", Keywords: "throat",  ResponseGroup: "EditorialReview"};

router.get('/amazon-products/desc', function (req, res) {
    awsProductsClient.call("ItemSearch", searchOptionsForDesc, function (err, searchResult) {
        if (err) {res.status(500).send('Error during product search');}
        return res.json(searchResult);
    });
});

module.exports = router;