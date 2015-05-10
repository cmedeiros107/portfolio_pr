'use strict';

/**
 * @ngdoc function
 * @name myFirstAngularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstAngularAppApp
 */
angular.module('myFirstAngularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
