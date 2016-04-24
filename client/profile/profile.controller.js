"use strict";
(function(){
    angular
        .module("SpaceApp")
        .controller("ProfileController", ProfileController);

    function user(name, pic, age, gender, zip) {
        this.name = name;
        this.pic = pic;
        this.age = age;
        this.gender = gender;
        this.zip = zip;
    }

    function RecommendController($scope){

		$scope.user = user("Jit", "../resources/profile_pic1.png", "25", "Male", "94087");          


    }
})();
