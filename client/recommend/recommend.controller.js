"use strict";
(function(){
    angular
        .module("SpaceApp")
        .controller("RecommendController", RecommendController);
    function RecommendController($scope, $location, $http){
       // var model = this;
       // model.action = action;
         
        $scope.action= function(){
          $http.get("/api/amazon-products/link").then(function(data) {
            console.log(data);
            var items = data.data.Items.Item;
            // for (var i = 0; i < items.length; i++) { 
            for (var i = 0; i < 10; i++) { 
                console.log(items[i].DetailPageURL);
            }
           });
          $http.get("/api/amazon-products/img").then(function(data) {
            console.log(data);
            var items = data.data.Items.Item;
            // for (var i = 0; i < items.length; i++) { 
            for (var i = 0; i < 10; i++) { 
                console.log(items[i].MediumImage.URL);
            }
          });
          $http.get("/api/amazon-products/price").then(function(data) {
            console.log(data);
            var items = data.data.Items.Item;
            // for (var i = 0; i < items.length; i++) { 
            for (var i = 0; i < 10; i++) { 
                console.log(items[i].Offers.Offer.OfferListing.Price.FormattedPrice);
            }
          });
          $http.get("/api/amazon-products/desc").then(function(data) {
            console.log(data);
            var items = data.data.Items.Item;
            // for (var i = 0; i < items.length; i++) { 
            for (var i = 0; i < 10; i++) { 
                console.log(items[i].EditorialReviews.EditorialReview.Content);
            }
          });
        };
   }
})();
