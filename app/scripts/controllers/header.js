'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
