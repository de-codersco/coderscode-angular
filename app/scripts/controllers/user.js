'use strict';

/* Controllers */

// ['$rootScope', '$scope', '$location', '$localStorage', 'User',

angular.module('coderscodeAngularApp')
    .controller('UserCtrl', function($rootScope, $scope, $location, $localStorage, User, $http) {

        $scope.signin = function() {
            console.log('signin');
            var formData = {
                email: $scope.email,
                password: $scope.password
            };

            User.signin(formData, function(res) {
                if (res.type === false) {
                    console.log(res.data);
                } else {
                    console.log(res);
                    console.log(res.data);
                    console.log(res.data.token);
                    $localStorage.token = res.data.token;
                    window.location = '/';
                }
            }, function() {
                $rootScope.error = 'Failed to signin';
            });
        };

        $scope.signup = function() {
            var formData = {
                email: $scope.email,
                password: $scope.password
            };

            User.save(formData, function(res) {
                if (res.type === false) {
                    console.log(res.data);
                } else {
                    $localStorage.token = res.data.token;
                    window.location = '/';
                }
            }, function() {
                $rootScope.error = 'Failed to signup';
            });
        };

        $scope.me = function() {
            User.me(function(res) {
                $scope.myDetails = res;
            }, function() {
                $rootScope.error = 'Failed to fetch details';
            });
        };

        $scope.logout = function() {
            console.log('logout');
            User.logout(function() {
                $location.path('/');
                // window.location = '/';
            }, function() {
                console.log('Failed to logout!');
            });
        };

        $scope.token = $localStorage.token;

        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        //$scope.renderUser = false;
        var url = 'http://' + $location.host() + ':9000/api/user';

        $http.get(url) // jsonp
          .success(function(data){
            $scope.renderUser = true;
            $scope.user = data;
          })
          .error(function(){
            $scope.renderUser = false;
          });
    });
