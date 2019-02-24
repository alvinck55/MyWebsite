angular.module("WebsiteApp",['main']);

angular.module("main",[]);

angular.module("main").controller("mainController",['$scope',function($scope){
  $scope.myString = "myString";
}])
