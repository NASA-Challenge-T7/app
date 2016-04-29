"use strict";
(function(){
    angular
        .module("SpaceApp")
        .config(function($routeProvider){
            $routeProvider
                 .when("/mapCH4", {
                     templateUrl: "client/map/mapForCH4.view.html",
                      controller: "MapForCH4Controller"
                 })
                 .when("/mapCO", {
                     templateUrl: "client/map/mapForCO.view.html",
                      controller: "MapForCOController"
                 })
                 .when("/mapPollen", {
                     templateUrl: "client/map/mapForPollen.view.html",
                      controller: "MapForPollenController"
                 })
                 .when("/recommend", {
                     templateUrl: "client/recommend/recommend.view.html",
                      controller: "RecommendController"
                 })
                  .when("/history", {
                     templateUrl: "client/history/history.view.html",
                     controller: "HistoryController",
                      controllerAs: "model"
                 })
                  .when("/sick", {
                     templateUrl: "client/sick/sick.view.html",
                 })
                 .when("/forecast", {
                     templateUrl: "client/forecast/forecast.view.html",
                          controller: "ForecastController",
                      controllerAs: "model"
                 })
                  .when("/profile", {
                     templateUrl: "client/profile/profile.view.html",
                 })
                  .otherwise({
                     templateUrl: "client/map/mapForCH4.view.html",
                      controller: "MapForCH4Controller"
                });
});
})();