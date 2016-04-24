"use strict";
(function(){
    angular
        .module("SpaceApp")
        .controller("ForecastController", ForecastController);
    function ForecastController($scope) {
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
        }

})();
