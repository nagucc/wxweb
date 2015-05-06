'use strict';

/**
 * @ngdoc service
 * @name wxwebApp.User
 * @description
 * # User
 * Service in the wxwebApp.
 */
angular.module('wxwebApp')
  .service('User', function ($http, $location) {
    return {

      /*
      * 确保用户已登录
       首先获取用户状态：
        - 如果用户已登录，则执行回调函数succcess
        - 如果用户未登录，则使用微信企业号登录
      */
      ensureWxLogin: function (success) {
        $http.get('http://api.ynu.edu.cn/user/getme', {withCredentials: true}).success(function (result) {
          if (result.ret == 0) {                                                      // 用户已登录
            success(result.data);
          } else {                                                                  // 用户未登录，跳转到登录页面
            window.location = 'http://api.ynu.edu.cn/eynu/wx/authorize?redirect_uri=' + encodeURIComponent($location.absUrl());
          }
        });
      },
      getTicket: function (success, fail) {
        // body...
        $http.get('http://api.ynu.edu.cn/user/ticket').success(success).error(fail);
      }
    }
  });