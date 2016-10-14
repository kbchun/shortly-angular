angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(success) {
        $location.path('/links');
      });
  };
});
