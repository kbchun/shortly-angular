angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.filteredData = {};

  $scope.liveSearch = '';

  $scope.$watch('liveSearch', function() {
    $scope.filteredData.links = $scope.data.links.filter(function(item) { 
      return item.title.toLowerCase().includes($scope.liveSearch.toLowerCase());
    });
    console.log($scope.filteredData.links);
  });


  Links.getAll()
    .then(function(res) {
      res.sort(function(a, b) { return b.visits - a.visits; });
      $scope.data.links = res;
      $scope.filteredData.links = res;
    });

  $scope.signout = function() {
    Auth.signout();
  };
});
