'use strict';

/**
 * @ngdoc function
 * @name coderscodeAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coderscodeAngularApp
 */
angular.module('coderscodeAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
