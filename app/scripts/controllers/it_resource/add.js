'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:ItResourceAddCtrl
 * @description
 * # ItResourceAddCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('ItResourceAddCtrl', function ($scope, $rootScope, $http, $location, User, ItRes, flashr) {
    $scope.itres = {};

    // 页面元素
    $scope.ItResRules = {
    	name: {
    		inputType:'text',
    		label: '名称',
    		required: {
    			rule: true,
    			message: '必须填写名称'
    		}
    	},
    	domain: {
    		inputType:'text',
    		label: '域名',
            pattern: {
                rule: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
                message: '无效的域名'
            },
    		required: {
    			rule: true,
    			message: '必须填写域名'
    		}
    	},
    	submit: {
    		inputType: 'submit',
    		label: '提交'
    	}
    };

    // 获取可用的IT资源类型
    ItRes.types(function (types) {
    	$scope.types = [];
    	for (var i = 0; i < types.length; i++) {
    		$scope.types.push({
    			value: types[i].code, label: types[i].name
    		});
    	};
    });


    // 提交添加IT资源
    $scope.submit = function (data) {
    	ItRes.add(data, function (result) {								// 执行成功
    		if(result.ret === 0){										// 添加成功
    			var itres = result.data;
	    		$location.url('/it_resource/detail/' + itres._id);	
    		} else {													// 添加失败
    			flashr.now.warning(result.msg);
    		}
    	}, function () {												// 执行失败
    		flashr.now.error('网络连接错误');
    	});
    };
  });
