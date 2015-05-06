'use strict';

/**
 * @ngdoc function
 * @`me wxwebApp.controller:ItResourceDetailCtrl
 * @description
 * # ItResourceDetailCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('ItResourceDetailCtrl', function ($scope, $rootScope, $routeParams, ItRes) {
  	var resId = $routeParams.resId;
  	ItRes.get(resId, function (itres) {
  		$scope.itres = itres;
  	});

  	$scope.removeMonitor = function (resId, monitorId) {
  		ItRes.removeMonitor(resId, monitorId, function () {
  			for (var i = 0; i < $scope.itres.monitors.length; i++) {
  				if($scope.itres.monitors[i].id === monitorId){
  					$scope.itres.monitors.splice(i, 1);
  					break;
  				}
  			};
  		})
  	}

  	$scope.removeRes = function (resId) {
  		alert('removeRes'+resId);
  	}
  });

