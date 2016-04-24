"use strict";
(function(){
    angular
        .module("SpaceApp")
        .config(function($routeProvider){
            $routeProvider
                 .when("/", {
                     templateUrl: "client/map/map.view.html",
                      controller: "MapController"
                 })
                 .when("/recommend", {
                     templateUrl: "client/recommend/recommend.view.html",
                      controller: "RecommendController"
                 })
                  .when("/history", {
                     templateUrl: "client/history/history.view.html",
                 });
                  .when("/sick", {
                     templateUrl: "client/sick/sick.view.html",
                 })
                 .when("/forecast", {
                     templateUrl: "client/forecast/forecast.view.html",
                 })
                  .when("/profile", {
                     templateUrl: "client/profile/profile.view.html",
                 });
                   });
                  .otherwise({
                    redirectTo: "/"
                });

})();