(function(){
    angular
        .module("SpaceApp")
        .controller("IndexController", IndexController);


    function IndexController($scope, $rootScope, $location, $http){
        var model = this;
        model.user = $rootScope.user;
        // model.location = $rootScope.location;
        $rootScope.location = model.location;
        model.toggle = toggle;
        model.go = go
        model.submit = submit;


        function go ( path ) {
             $location.path( path );
        };


 $scope.changeLocation = function() {
        console.log("changed");
        codeAddress($scope.model.location);
 }


           function codeAddress(address) {

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {

              // console.log(address + ":" + results[0].geometry.location);
              if (status == google.maps.GeocoderStatus.OK) {
                
                console.log(results[0]);
                var name = results[0].formatted_address;
                var geoLocation = results[0].geometry.location;

                // console.log("/pollen/pollen-loader?lat=" + geoLocation.lat() + "&lon=" + geoLocation.lng());
                $http.get("/pollen/pollen-loader?lat=" + geoLocation.lat() + "&lon=" + geoLocation.lng()).then(function(data) {
                  console.log(data);
                  $scope.name = name;
                  $scope.pollen_count = data.data.pollen_count;
                  $scope.temperature = data.data.temperature;
                  $scope.weather = data.data.weather;



                });


              } else {
                console.log('Geocode was not successful for the following reason: ' + status);
              }
              
            });

          }



 function submit( ) {
    console.log(model.location)
             $rootScope.location = model.location;
         }

        model.mainToggleClass = "col-xs-12";
        model.sideBarToggleClass = "col-xs-2";
        model.toggleShow = false;

        function toggle() {
            if(model.toggleShow) {
                model.mainToggleClass = "col-xs-12";
                model.toggleShow = false;
            }
            else
            {
                model.mainToggleClass = "col-xs-10";
                model.toggleShow = true;
            }
//            model.toggleShow = !model.toggleShow;
        }
    }
})();
