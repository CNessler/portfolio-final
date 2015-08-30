app.controller("PortfolioController", ['$scope', '$http', function ($scope, $http) {
  $scope.skills = false;
  $scope.showSkills = function() {
    $scope.skills = $scope.skills === false ? true: false;
  }

  $scope.sendMessage = function () {
    console.log('in func');
    $http.post('https://api.sendgrid.com/api/mail.send.json',
    {
      api_user: 'cbear1325',
      api_key: 'Footprints1!',
      to: 'clrnessler@gmail.com',
      toname: 'Claire',
      subject: $scope.subject,
      text: 'notsure',
      from: $scope.email
    })
  }
  // $scope.sendMessage = function () {
  //   console.log('in func');
  //   var message = {
  //     from: $scope.email,
  //     subject: $scope.message
  //   }
  //   PortfolioService.message(message)
  // }
}])
