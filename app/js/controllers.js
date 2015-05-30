'use strict';

/* Controllers */

var starWarscontrollers = angular.module('starWarsAngularcontrollers', []);

starWarscontrollers.controller('starWarsDetailcontrol', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://swapi.co/api/people/').success(function(data) {
      $scope.peoples = data.results;
    });

    $scope.orderProp = 'name';
  }]);

starWarscontrollers.controller('starWarsListcontrol', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.name = $routeParams.name;
  }]);