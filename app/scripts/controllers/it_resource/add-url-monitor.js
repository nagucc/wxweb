'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:ItResourceAddUrlMonitorCtrl
 * @description
 * # ItResourceAddUrlMonitorCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('ItResourceAddUrlMonitorCtrl', function ($scope, $routeParams, ItRes, flashr, $location) {
    var resId = $routeParams.resId;
    $scope.monitor = {
        resId: resId,
        wxReceiver: true,
        type: 1                             // Url监控，类型为1
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
    	url: {
    		inputType:'text',
    		label: 'Url',
    		pattern: {
    			rule: /(http[s]{0,1}):\/\/[a-zA-Z0-9\.\-]+\.([a-zA-Z]{2,4})(:\d+)?(\/[a-zA-Z0-9\.\-~!@#$%^&*+?:_/=<>]*)?/,
    			message: '请正确填写Url'
    		},
    		required: {
    			rule: true,
    			message: '必须填写Url'
    		}
    	},
    	port: {
    		inputType: 'text',
    		label: '端口',
    		custom: function (val, monitor) {
    			
    			if(monitor.type && monitor.type !== 1){
    				var port = parseInt(val);
    				var config = $injector.get('FormForConfiguration');
    				config.setValidationFailedForCustomMessage('端口监控必须提供端口号');
    				if(isNaN(port) || port < 1 || port > 65535) return false;    				
    			}
    			return true;
    		}
    	}
    };

    $scope.submit = function (data) {
        ItRes.addMonitor(resId, data, function (monitor) {
            $location.url('/it_resource/detail/' + resId);
        }, function (result) {
            flashr.now.warning(result.msg);
        })
    };
  });
