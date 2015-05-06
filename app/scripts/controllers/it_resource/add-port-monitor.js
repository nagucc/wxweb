'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:ItResourceAddPortMonitorCtrl
 * @description
 * # ItResourceAddPortMonitorCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('ItResourceAddPortMonitorCtrl', function ($scope, $routeParams, ItRes, flashr, $location) {
    var resId = $routeParams.resId;
    $scope.monitor = {
        resId: resId,
        wxReceiver: true,
        type: 2
    };

    $scope.MonitorRules = {
    	name: {
    		inputType:'text',
    		label: '名称',
    		required: {
    			rule: true,
    			message: '必须填写名称'
    		}
    	},
    	port: {
    		inputType: 'text',
    		label: '端口',
    		required: {
    			rule: true,
    			message: '必须填写端口号'
    		},
    		type: {
    			rule: 'number',
    			message: '只能填写数字'
    		},
    		minimum: {
    			rule: 1,
    			message: '无效的端口号'
    		},
        	maximum: {
        		rule: 65535,
        		message: '无效的端口号'
        	}
    	}
    };

    $scope.submit = function (data) {
    	ItRes.addMonitor(resId, data, function (monitor) {
    		$location.url('/it_resource/detail/' + resId);        // 添加成功
    	}, function (result) {
    		flashr.now.warning(result.msg);                       // 添加失败
    	});
    }
  });
