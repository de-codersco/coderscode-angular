'use strict';

/**
 * @ngdoc function
 * @name coderscodeAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coderscodeAngularApp
 */
angular.module('coderscodeAngularApp')
  .controller('MainCtrl', function ($scope,$http,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //var url = 'http://' + $location.host() + ':9000/api/user?callback=JSON_CALLBACK';
    var url = 'http://' + $location.host() + ':9000/api/user';

    $http.get(url) // jsonp
      .success(function(data){
        $scope.renderUser = true;
        $scope.user = data;
      })
      .error(function(){
        $scope.renderUser = false;
      });
    //console.log(url);
    //$scope.renderUser = false;
  });
