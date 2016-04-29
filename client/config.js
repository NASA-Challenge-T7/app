"use strict";
(function(){
    angular
        .module("SpaceApp")
        .config(function($routeProvider){
            $routeProvider
               .when("/", {
                     templateUrl: "client/landing/landing.view.html",
                })
                 .when("/map", {
                     templateUrl: "client/map/map.view.html",
                      controller: "MapController"
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
                  .when("/remedies", {
                     templateUrl: "client/remedies/remedies.view.html",
                 })
                  .when("/medical", {
                     templateUrl: "client/medical/medical.view.html",
                 })
                  .otherwise({
                    templateUrl: "client/landing/landing.view.html",
                                      });
});
})();