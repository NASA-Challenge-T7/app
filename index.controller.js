(function(){
    angular
        .module("SpaceApp")
        .controller("IndexController", IndexController);


    function IndexController($rootScope, $location){
        var model = this;
        model.user = $rootScope.user;
        model.toggle = toggle;
        model.go = go
        function go ( path ) {
             $location.path( path );
        };

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
