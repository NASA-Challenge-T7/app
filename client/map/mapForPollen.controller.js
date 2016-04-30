"use strict";
(function () {
    angular
        .module("SpaceApp")
    	.controller("MapForPollenController", ['$scope', '$location', '$route', '$http', 'app', function ($scope, $location, $route, $http, app) {

            console.log("Here!");


			var tmpLat = '51.7546407',
				tmpLon = '-1.2510746';
		    var inputData = [];

            function getData(currentLat, currentLon, inputData){

            	// var inputData = [];
	            var widenAreaNum = 10;
	            var widenAreaMargin = 0.005;

	            for (var i = 0; i < widenAreaNum; i++) {
	            	for (var j = 0; j < widenAreaNum; j++){

	            		var targetLat = currentLat - widenAreaMargin * widenAreaNum + widenAreaMargin * j;
	            		var targetLon = currentLon - widenAreaMargin * widenAreaNum + widenAreaMargin * i;
	            		var weight = 0;

			          	// return $http.get("/pollen/pollen-loader?lat=" + targetLat + "&lon=" + targetLon).then(function(data) {
			          	return $http.get("/pollen/pollen-loader?lat=" + targetLat + "&lon=" + targetLon).then(function(data) {

			          		if(data.data.pollen_count === "Moderate"){
			          			weight = 1
			          		}else if(data.data.pollen_count === "bad"){
			          			weight = 2;
			            	}
			            	console.log("[" + targetLat + "," + targetLon + "]" + weight);
		                	inputData[i * widenAreaNum + j] = {location: new google.maps.LatLng(targetLat, targetLon), weight: weight};

		                	return inputData;
	            		});
	            	}
	        	}

	        }

	        getData(tmpLat, tmpLon, inputData).then(function(inputData){

	        	$scope.map = {
		            center: {
		            latitude: tmpLat,
		            longitude: tmpLon
		            },
		            zoom: 12,
		            heatLayerCallback: function (layer) {
		                //set the heat layers backend data
		                var mockHeatLayer = new MockHeatLayer(layer, inputData);

		                },
		            showHeat: true
		        };
	        	
	        })

	        // function mapInit(inputData){


	        // }
	        // );

	        

 

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
				    'rgba(0, 255, 255, 0.5)',
				    'rgba(20, 127, 0, 0.8)',
				    'rgba(191, 31, 0, 1)']);
		    }
		}])
    })();
