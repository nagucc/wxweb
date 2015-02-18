'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
