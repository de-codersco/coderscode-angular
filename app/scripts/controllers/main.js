'use strict';

/**
 * @ngdoc function
 * @name coderscodeAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coderscodeAngularApp
 */
angular.module('coderscodeAngularApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var url = 'http://localhost:9000/api/user?callback=JSON_CALLBACK';
    $http.jsonp(url)
      .success(function(data){
        $scope.user = data;
      });
  });