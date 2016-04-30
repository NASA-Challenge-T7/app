"use strict";
(function () {
    angular
        .module("SpaceApp")
    	.controller("MapForCOController", ['$scope', '$location', '$route', '$http', 'app', function ($scope, $location, $route, $http, app) {

            console.log("Here!");



		    var inputData = [];


		    var currentLat;
		    var currentLon;


		    function initMap(){
		    	var geocoder = new google.maps.Geocoder();

	            geocoder.geocode( { 'address': $scope.model.location}, function(results, status) {

	              // // console.log(address + ":" + results[0].geometry.location);
		              if (status == google.maps.GeocoderStatus.OK) {
		                
		              //   console.log(results[0]);
		                var geoLocation = results[0].geometry.location;
		                currentLat = geoLocation.lat();
		                currentLon = geoLocation.lng();


		              } else {

					    currentLat = 37.782551;
					    currentLon = -122.445368;

		              }
	              
	            });

		    }
		    initMap();


		    $scope.model.submit = function(){

		        	$route.reload();


		    }


          	$http.get("../resources/TotCO_daily_20150101.json").then(function(data) {
	            console.log(data);
	            var contents = data.data.data;
	            // for (var i = 0; i < items.length; i++) { 
	            for (var i = 0; i < data.data.length; i++) { 
	                inputData[i] = {location: new google.maps.LatLng(contents[i].lat,contents[i].lon), weight:contents[i].weight};

	            	// console.log(contents[i]);
	            }

		        $scope.map = {
		            center: {
		            latitude: currentLat,
		            longitude: currentLon
		            },
		            zoom: 5,
		            heatLayerCallback: function (layer) {
		                //set the heat layers backend data
		                var mockHeatLayer = new MockHeatLayer(layer, app.heatData2);
		                // var mockHeatLayer = new MockHeatLayer(layer, inputData);
		                },
		            showHeat: true
		        };

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
	         //    $scope.map.heatLayerCallback = function (layer) {
	         //        layer.setData(null);
	         //        var mockHeatLayer = new MockHeatLayer(layer, taxiData2);
          //     	};
		        // $scope.map.showHeat = true;

            	// };
		    };

		    $scope.chose3 = function(){
                console.log("CHOSE3 on");
				$location.path("/mapCH4");

		    };

		    $scope.chose4 = function(){
                console.log("CHOSE3 on");
				$location.path("/mapPollen");

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
