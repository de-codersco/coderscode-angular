'use strict';

/**
 * @ngdoc overview
 * @name coderscodeAngularApp
 * @description
 * # coderscodeAngularApp
 *
 * Main module of the application.
 */
angular
  .module('coderscodeAngularApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'UserCtrl' // MainCtrl
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/profile', {
          templateUrl: 'views/profile.html',
          controller: 'UserCtrl'
      })
      .when('/signin', {
          templateUrl: 'views/signin.html',
          controller: 'UserCtrl'
      })
      .when('/github', {
          templateUrl: 'views/github.html',
          controller: 'UserCtrl'
      })
      .when('/facebook', {
          templateUrl: 'views/facebook.html',
          controller: 'UserCtrl'
      })
      .when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'UserCtrl'
      })
      .when('/me', {
          templateUrl: 'views/me.html',
          controller: 'UserCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });



      $httpProvider.interceptors.push(function($q, $location, $localStorage) {
        return {
          'request': function (config) {
            config.headers = config.headers || {};
            if ($localStorage.token) {
              console.log('interceptor::request ' + $localStorage.token);
              config.headers.Authorization = 'Bearer ' + $localStorage.token;
            }
            return config;
          },
          'responseError': function(response) {
            if(response.status === 401 || response.status === 403) {
              console.log('interceptor::responseError ' + response.status);
              $location.path('/signin');
            }
            return $q.reject(response);
          }
        };
      });
  });
