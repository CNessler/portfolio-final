app.controller("PortfolioController", ['$scope', function ($scope) {
  $scope.skills = false;
  $scope.showSkills = function() {
    $scope.skills = $scope.skills === false ? true: false;
  }
}])
