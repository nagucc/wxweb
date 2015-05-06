'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:NavBarCtrl
 * @description
 * # NavBarCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('NavBarCtrl', function ($scope, User, $rootScope) {
    User.ensureWxLogin(function(user){				// 确保用户已使用eyun企业微信号登录
    	$rootScope.me = user;
    });
  });
