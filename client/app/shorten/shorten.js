angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.errorMessage = '';
  $scope.class = '';

  $scope.addLink = function() {
    $scope.link.url = $scope.newLink;
    Links.addOne($scope.link)
      .then(function(success) {
        if (success.status === 500) {
          $scope.errorMessage = 'Please enter a valid URL';
          $scope.class = 'error';
        }
      });
    $scope.newLink = '';
  };

  $scope.signout = function() {
    Auth.signout();
  };
});
