'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:ItResourceAddMonitorCtrl
 * @description
 * # ItResourceAddMonitorCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('ItResourceAddMonitorCtrl', function ($scope, $routeParams) {
  	$scope.resId = $routeParams.resId;
    
  });
