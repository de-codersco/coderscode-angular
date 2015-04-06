'use strict';

/**
 * @ngdoc function
 * @name coderscodeAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coderscodeAngularApp
 */
angular.module('coderscodeAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
