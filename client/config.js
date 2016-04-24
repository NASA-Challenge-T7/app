"use strict";
(function(){
    angular
        .module("SpaceApp")
        .config(function($routeProvider){
            $routeProvider
                 .when("/map", {
                     templateUrl: "client/map/map.view.html",
                      controller: "MapController"
                 })
                 .when("/recommend", {
                     templateUrl: "client/recommend/recommend.view.html",
                      controller: "RecommendController"
                 })
                  .when("/profile", {
                     templateUrl: "client/profile/profile.view.html",
                 });
                   });

})();