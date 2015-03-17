'use strict';

/**
 * @ngdoc overview
 * @name wxwebApp
 * @description
 * # wxwebApp
 *
 * Main module of the application.
 */
angular
  .module('wxwebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/user/new/:userId/mpId/:mpId/ticket/:ticket', {
        templateUrl: 'views/user/edit.html',
        controller: 'UserNewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
