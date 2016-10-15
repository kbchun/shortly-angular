angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.errorMessage = '';
  $scope.class = '';
  $scope.newLink = '';

  $scope.ValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  
  $scope.$watch('newLink', function() {
    if ($scope.newLink === '') {
      $scope.class = '';
      $scope.errorMessage = '';
    } else if ($scope.newLink.match($scope.ValidUrl)) {
      $scope.class = '';
      $scope.errorMessage = '';
    } else {
      $scope.class = 'error';
      $scope.errorMessage = 'Not a valid URL';
    }
  });

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
