"use strict";
(function(){
    angular
        .module("SpaceApp")
        .controller("ForecastController", ForecastController);
    function ForecastController($scope, $rootScope, $http, $controller) {

          $controller('IndexController', {$scope: $scope});

          $scope.changeLocation = function(){
            console.log("Change Call from forecast.");
            codeAddress($scope.model.location);

          };

            // $scope.location = $rootScope.location;

            // $scope.$watch($scope.model.location, codeAddress($scope.model.location));
            // $scope.submit() = function(){
            //   // console.log($rootScope.location);
            //   codeAddress($rootScope.location);
            // };


            // $scope.submit(
            // {onClick: function() {
            //   codeAddress($rootScope.location);
            // }});


            $scope.data = {
              dataset0: [
                {x: 0 , val_0: 20000, val_1: 0, val_2: 0, val_3: 0},
                {x: 5 , val_0: 19800, val_1: 3.894, val_2: 8.47, val_3: 14.347},
                {x: 10, val_0: 19800, val_1: 7.174, val_2: 13.981, val_3: 19.991},
                {x: 15, val_0: 15600, val_1: 9.32, val_2: 14.608, val_3: 13.509},
                {x: 20, val_0: 13000, val_1: 9.996, val_2: 10.132, val_3: -1.167},
                {x: 25, val_0: 11000, val_1: 9.093, val_2: 2.117, val_3: -15.136},
                {x: 30, val_0: 7000, val_1: 6.755, val_2: -6.638, val_3: -19.923},
                {x: 35, val_0: 2000, val_1: 3.35, val_2: -13.074, val_3: -12.625},
                {x: 40, val_0: 900, val_1: 3.35, val_2: -13.074, val_3: -12.625}
              ]
            };


          $scope.options = {
            series: [
              {
                axis: "y",
                dataset: "dataset0",
                key: "val_0",
                label: "Reported sickness vs the temperature reading",
                color: "#1f77b4",
                type: ['line', 'dot', 'area'],
                id: 'mySeries0'
              }
            ],
            axes: {x: {key: "x"}}
          };




          // codeAddress($rootScope.location);
          codeAddress($scope.model.location);

          function codeAddress(address) {

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {

              // console.log(address + ":" + results[0].geometry.location);
              if (status == google.maps.GeocoderStatus.OK) {
                
                console.log(results[0]);
                var geoLocation = results[0].geometry.location;

                // console.log("/pollen/pollen-loader?lat=" + geoLocation.lat() + "&lon=" + geoLocation.lng());
                $http.get("/pollen/pollen-loader?lat=" + geoLocation.lat() + "&lon=" + geoLocation.lng()).then(function(data) {
                  // console.log(data);
                  $scope.pollen_count = data.data.pollen_count;
                  $scope.temperature = data.data.temperature;
                  $scope.weather = data.data.weather;



                });


              } else {
                console.log('Geocode was not successful for the following reason: ' + status);
              }
              
            });

          }

        }


})();
