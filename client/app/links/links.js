angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.filteredData = {};

  $scope.liveSearch = '';

  // $scope.$watch('liveSearch', function() {
  //   $scope.filteredData = $scope.data.filter(function(item) { 
  //     return item.indexOf($scope.liveSearch) !== -1;
  //   });
  // });


  Links.getAll()
    .then(function(res) {
      res.sort(function(a, b) { return b.visits - a.visits; });
      $scope.data.links = res;
      $scope.filteredData = res;
    });

  $scope.signout = function() {
    Auth.signout();
  };
});
