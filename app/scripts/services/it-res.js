'use strict';

/**
 * @ngdoc service
 * @name wxwebApp.itRes
 * @description
 * # itRes
 * Service in the wxwebApp.
 */
angular.module('wxwebApp')
  .service('ItRes', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {

    	/**
    	 * 添加IT资源
    	 * Examples:
    	 * itRes.add(resource, success, fail);

    	 * Resource: 待添加的资源的信息
    	 {
    	 	name: 'CMS后台服务器',
    	 	domain: '208.88.ynu.edu.cn',
    	 	type: 1		// 1: 服务器, 2: Web应用, 3: 其他应用
    	 }

    	 * success: 添加成功的callback
    	 	- result
    	 		- ret
	 			- 

	 	 * fail: 添加失败的callback
	 	 	- result
	 	 		- ret
	 	 		- msg
    	**/
    	add: function(resource, success, fail){
    		$http.post('http://api.ynu.edu.cn/it-res/add', resource, {withCredentials: true}).success(success).error(fail);
    	},
        remove: function(id, success, fail){
            $http.post('http://api.ynu.edu.cn/it-res/remove/' + id, {}, {withCredentials: true})
                .success(success)
                .error(function () {
                    fail({ret: -999, msg: '网络连接或远程服务器故障'});
                });
        },
    	types: function (success, fail) {
    		$http.get('http://api.ynu.edu.cn/it-res/types').success(success).error(fail);
    	},

        /*
         获取当前用户可管理的所有IT资源
        */
    	mine: function (success, fail) {
    		$http.post('http://api.ynu.edu.cn/it-res/mine', {}, {withCredentials: true}).success(function (result) {
                if(result.ret === 0){
                    success(result.data);
                } else {
                    fail(result);
                }
            }).error(function () {
                fail({ret: -999, msg: '网络连接或远程服务器故障'});
            });
    	},
    	get: function (resId, success, fail) {
    		$http.get('http://api.ynu.edu.cn/it-res/get/' + resId, {withCredentials: true}).success(function (result) {
    			if(result.ret === 0){
    				success(result.data);
    			} else {
    				fail(result);
    			}
    		}).error(fail);
    	},
        addMonitor: function(resId, monitor, success, fail){
            var url = 'http://api.ynu.edu.cn/it-res/add-monitor/';
            switch(monitor.type){
                case 1: 
                    url += 'url';
                    break;
                case 2: 
                    url += 'port';
                    break;
                default: 
                    fail({ret: -2, msg: '未知的监控类型:' + monitor.type});
                    return;
            }

            $http.post(url, monitor, {withCredentials: true}).success(function (result) {
                if(result.ret === 0){
                    success(result.data);
                } else {
                    fail(result);
                }
            }).error(function () {
                fail({ret: -999, msg: '网络连接或远程服务器故障'});
            });
        },
        removeMonitor: function(resId, monitorId, success, fail){
            $http.post('http://api.ynu.edu.cn/it-res/remove-monitor/' + resId + '/' + monitorId, {}, {withCredentials: true})
                .success(success)
                .error(function () {
                    fail({ret: -999, msg: '网络连接或远程服务器故障'});
                });
        }
    }
  });