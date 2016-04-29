"use strict";
(function () {
    angular
        .module("SpaceApp")
    	.controller("MapController", ['$scope', '$location', function ($scope, $location) {
            console.log('starting map controller');
            $scope.action = function () {
                console.log("I'm in here");
                $location.path("/profile")
            };

        // $http.get("/gMap/gMap-loader").then(function(data) {
        //     console.log(data);
        // }


                $scope.map = {
                        center: {
                                latitude: 56.162939,
                                longitude: 10.203921
                        },
                        zoom: 8
                };

   //          // don't forget to add gmaps-heatmap.js
			// var myLatlng = new google.maps.LatLng(25.6586, -80.3568);
			// // map options,
			// var myOptions = {
			//   zoom: 3,
			//   center: myLatlng
			// };
			// // standard map
			// map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
			// // heatmap layer
			// heatmap = new HeatmapOverlay(map, 
			//   {
			//     // radius should be small ONLY if scaleRadius is true (or small radius is intended)
			//     "radius": 2,
			//     "maxOpacity": 1, 
			//     // scales the radius based on map zoom
			//     "scaleRadius": true, 
			//     // if set to false the heatmap uses the global maximum for colorization
			//     // if activated: uses the data maximum within the current map boundaries 
			//     //   (there will always be a red spot with useLocalExtremas true)
			//     "useLocalExtrema": true,
			//     // which field name in your data represents the latitude - default "lat"
			//     latField: 'lat',
			//     // which field name in your data represents the longitude - default "lng"
			//     lngField: 'lng',
			//     // which field name in your data represents the data value - default "value"
			//     valueField: 'count'
			//   }
			// );

			// var testData = {
			//   max: 8,
			//   data: [{lat: 24.6408, lng:46.7728, count: 3},{lat: 50.75, lng:-1.55, count: 1}]
			// };

			// heatmap.setData(testData);



        }])
})();
