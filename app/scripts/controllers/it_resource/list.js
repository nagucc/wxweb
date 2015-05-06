'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:ItResourceListCtrl
 * @description
 * # ItResourceListCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('ItResourceListCtrl', function ($scope, $rootScope, ItRes, flashr) {
  	//$scope.itreses = [];
  	ItRes.mine(function (data) {						// 获取当前用户管理的所有IT资源
  			$scope.itreses = data;
  	}, function (result) {									// 连接失败
  		flashr.now.error(result.msg);
  	})
  });