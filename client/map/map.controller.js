"use strict";
(function () {
    angular
        .module('SpaceApp')
        .controller("MapController", ['$scope', '$location',function ($scope, $location) {
            console.log('starting map controller');
            $scope.action = function () {
                console.log("I'm in here");
                $location.path("/profile")
            };
        }])
})();
