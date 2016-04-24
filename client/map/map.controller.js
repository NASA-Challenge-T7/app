"use strict";
(function(){
    angular
        .module("SpaceApp")
        .controller("MapController", MapController);
    function MapController($scope, $location){
       // var model = this;
       // model.action = action;
         
        $scope.action= function(){
        	console.log("I'm in here");
            $location.path("/profile")
        };
   }
})();
