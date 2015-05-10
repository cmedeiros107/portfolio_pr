'use strict';

/**
 * @ngdoc function
 * @name myFirstAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFirstAngularAppApp
 */
angular.module('myFirstAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
