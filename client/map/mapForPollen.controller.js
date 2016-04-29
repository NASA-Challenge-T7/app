"use strict";
(function () {
    angular
        .module("SpaceApp")
    	.controller("MapForPollenController", ['$scope', '$location', '$route', '$http', 'app', function ($scope, $location, $route, $http, app) {

            console.log("Here!");


   //          var tmpLat = '51.7546407';
   //          var tmpLon = '-1.2510746';
			// var base_url = 'https://socialpollencount.co.uk/api/forecast?location=';
			// var url = base_url+'['+tmpLat+','+tmpLon+']';

			// var today = new Date().toISOString().substr(0,10);


			// if ( !String.prototype.contains ) {
			//     String.prototype.contains = function() {
			//         return String.prototype.indexOf.apply( this, arguments ) !== -1;
			//     };
			// }

			console.log("Getting data");
          	$http.get("/pollen/pollen-loader").then(function(data) {
            	console.log(data);
            });
 

		    $scope.chose0 = function(){
                console.log("CHOSE0 on");
		        $route.reload();
		    };

		    $scope.chose1 = function(){
                console.log("CHOSE1 on");
		        $scope.map.showHeat = true;
		    };

		    $scope.chose2 = function(){
                console.log("CHOSE2 on");
		        $scope.map.showHeat = false;
		    };

		    $scope.chose3 = function(){
                console.log("CHOSE3 on");
				$location.path("/mapCH4");

		    };


		    $scope.chose4 = function(){
                console.log("CHOSE3 on");
				$location.path("/mapCO");

		    };



			function MockHeatLayer(heatLayer, data) {
			    // Adding 500 Data Points
			    var map, pointarray, heatmap;
			    var pointArray = new google.maps.MVCArray(data);
			    heatLayer.setData(pointArray);
			    heatLayer.set('radius', 50);
			    heatLayer.set('gradient',
			    	[
				    'rgba(255, 255, 255, 0.8)',
				    'rgba(0, 255, 255, 1)',
				    'rgba(0, 255, 191, 1)',
				    'rgba(0, 255, 127, 1)',
				    'rgba(0, 255, 63, 1)',
				    'rgba(0, 255, 0, 1)',
				    'rgba(0, 223, 0, 1)',
				    'rgba(0, 191, 0, 1)',
				    'rgba(0, 159, 0, 1)',
				    'rgba(0, 127, 0, 1)',
				    'rgba(63, 91, 0, 1)',
				    'rgba(127, 63, 0, 1)',
				    'rgba(191, 31, 0, 1)',
				    'rgba(255, 0, 0, 1)']);
		    }


        }])
})();
