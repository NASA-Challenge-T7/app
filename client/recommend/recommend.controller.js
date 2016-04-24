"use strict";
(function(){
    angular
        .module("SpaceApp")
        .controller("RecommendController", RecommendController);
    function RecommendController($scope, $location, $http){
       // var model = this;
       // model.action = action;
         
        // $scope.action= function(){
          var items = [];
          function item(name, link, img, price, desc) {
            this.name = name;
            this.link = link;
            this.img = img;
            this.price = price;
            this.desc = desc;
          } 
          // var names = {};
          // var links = {};
          // var imgs = {};
          // var prices = {};
          // var descs = {};
          $http.get("/api/amazon-products/name").then(function(data) {
            console.log(data);
            var contents = data.data.Items.Item;
            // for (var i = 0; i < items.length; i++) { 
            for (var i = 0; i < 10; i++) { 
                items[i] = new item("", "", "", "", "");

                console.log(contents[i].ItemAttributes.Title);
                items[i].name = contents[i].ItemAttributes.Title;
                items[i].link = contents[i].DetailPageURL;
                items[i].img = contents[i].MediumImage.URL;
                items[i].price = contents[i].Offers.Offer.OfferListing.Price.FormattedPrice;
                var text = contents[i].EditorialReviews.EditorialReview.Content;
                if (text != null) {
                  if (text.length > 1000) {
                    text = text.substr(0, 30) + '…';
                  }
                }
                items[i].desc = text
            }
            // $http.get("/api/amazon-products/link").then(function(data) {
            //   console.log(data);
            //   var contents = data.data.Items.Item;
            //   // for (var i = 0; i < items.length; i++) { 
            //   for (var i = 0; i < 10; i++) { 
            //       console.log(contents[i].DetailPageURL);
            //       items[i].link = contents[i].DetailPageURL;
            //   }
            //   $http.get("/api/amazon-products/img").then(function(data) {
            //     console.log(data);
            //     var contents = data.data.Items.Item;
            //     // for (var i = 0; i < items.length; i++) { 
            //     for (var i = 0; i < 10; i++) { 
            //         console.log(contents[i].MediumImage.URL);
            //         items[i].img = contents[i].MediumImage.URL;
            //     }
            //     $http.get("/api/amazon-products/price").then(function(data) {
            //       console.log(data);
            //       var contents = data.data.Items.Item;
            //       // for (var i = 0; i < items.length; i++) { 
            //       for (var i = 0; i < 10; i++) { 
            //           console.log(contents[i].Offers.Offer.OfferListing.Price.FormattedPrice);
            //           items[i].price = contents[i].Offers.Offer.OfferListing.Price.FormattedPrice;
            //       }
            //       $http.get("/api/amazon-products/desc").then(function(data) {
            //         console.log(data);
            //         var contents = data.data.Items.Item;
            //         // for (var i = 0; i < items.length; i++) { 
            //         for (var i = 0; i < 10; i++) { 
            //             console.log(contents[i].EditorialReviews.EditorialReview.Content);
            //             items[i].desc = contents[i].EditorialReviews.EditorialReview.Content;
            //         }
            //       });
            //     });
            //   });
            // });
          $scope.items = items;
          });

          // for (var i = 0; i < 10; i++) { 
          //   $scope.item.name = names[i];
          //   $scope.item.img = imgs[i];
          //   $scope.item.desc = descs[i];
          //   $scope.item.price = prices[i];
          //   $scope.item.link = links[i];
          //   console.log($scope.item.name);
          // }
        // };
   }
})();
