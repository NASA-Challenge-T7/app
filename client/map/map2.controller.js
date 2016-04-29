"use strict";
(function () {
    angular
        .module("SpaceApp")
    	.controller("Map2Controller", ['$scope', '$location', '$route', 'app', function ($scope, $location, $route, app) {

            console.log("Here!");

		  

            $scope.map = {
	            center: {
	            latitude: 37.782551,
	            longitude: -122.445368
	            },
	            zoom: 5,
	            heatLayerCallback: function (layer) {
	                //set the heat layers backend data
	                var mockHeatLayer = new MockHeatLayer(layer, app.heatData2);
	                },
	            showHeat: true,
	            radius: 500
            };

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
		        // // // $scope.map.showHeat = false;
	         //    $scope.map.heatLayerCallback = function (layer) {
	         //        layer.setData(null);
	         //    };
	         // //        var mockHeatLayer = new MockHeatLayer(layer, taxiData2);
          // //     	};
		        // // $scope.map.showHeat = true;
		        // // $scope.refreshMap = true;
		        // // google.maps.event.trigger($scope.map, 'resize')
		        // $route.reload();

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
