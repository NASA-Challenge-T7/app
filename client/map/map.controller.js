"use strict";
(function () {
    angular
        .module('SpaceApp')
        .controller("MapController", ['$scope', '$location', /*'ngMap'*/function ($scope, $location /*NgMap*/) {
            console.log('starting map controller');
            //NgMap.getMap().then(function (map) {
            //    console.log(map.getCenter());
            //    console.log('markers', map.markers);
            //    console.log('shapes', map.shapes);
            //});

            $scope.action = function () {
                console.log("I'm in here");
                $location.path("/profile")
            };
        }])
})();
