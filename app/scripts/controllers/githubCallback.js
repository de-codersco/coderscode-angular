'use strict';

angular.module('coderscodeAngularApp')
    .controller('GitHubCallbackCtrl', function($scope, $location) {

  // http://localhost:8000/?code=56f77bd0a35f1a0e153b#/githubCallback

  $scope.code = $location.search().code;

});
