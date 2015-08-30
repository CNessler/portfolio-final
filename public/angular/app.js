var app = angular.module('Portfolio', ['ngAnimate', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/skills',{
        templateUrl: '/partials/skills.html',
        controller: 'PortfolioController'
      })
      .when('/contact', {
        templateUrl: '/partials/contact.html',
        controller: 'PortfolioController'
      })
      .otherwise({
        redirectTo: '/'
      })

      $locationProvider.html5Mode(true);
});
