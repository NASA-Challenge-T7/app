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
	            zoom: 12,
	            heatLayerCallback: function (layer) {
	                //set the heat layers backend data
	                var mockHeatLayer = new MockHeatLayer(layer, app.heatData2);
	                },
	            showHeat: true
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
				$location.path("/map");
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
		    }


        }])
})();
