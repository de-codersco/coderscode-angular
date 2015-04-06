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
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
