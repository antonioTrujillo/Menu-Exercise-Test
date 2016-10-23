

 (function(){
  var app= angular.module("myApp",["ngRoute"]);
      app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
        $routeProvider.when("/",{ 
          templateUrl:"templates/home.html",
          controller:"MainCtrl",
          controllerAs:"home"
        });
        $routeProvider.when("/showCatalogue",{ 
          templateUrl:"templates/catalogue1.html",
          controller:"MainCtrl",
          controllerAs:"catalogue"
        });
      }]);
      app.directive("ngHeader", function(){ 
        return{ 
            restrict:"AEC",
            templateUrl:"components/header.html"
        };
      });
      app.directive("ngCategories", function(){ 
        return{ 
            restrict:"AEC",
            templateUrl:"components/categories.html"
        };
      });
      app.directive("ngFooter", function(){ 
        return{ 
            restrict:"AEC",
            templateUrl:"components/footer.html"
        };
      });

      app.controller("MainCtrl", function($scope){
   		$scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };
      }); 

  })();
  
