'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
