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
                  .when("/profile", {
                     templateUrl: "client/profile/profile.view.html",
                 });
                   });

})();