'use strict';

/* App Module */

var starWars = angular.module('starWarsAngularApp', [
  'ngRoute',
  'starWarsAngularcontrollers'
]);

starWars.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/people/', {
        templateUrl: 'partials/starNames.html',
        controller: 'starWarsDetailcontrol'
      }).
      when('/people/:name', {
        templateUrl: 'partials/starWars.html',
        controller: 'starWarsListcontrol'
      }).
      otherwise({
        redirectTo: 'people/'
      });
  }]);
