'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:Cheia2015RegisterCtrl
 * @description
 * # Cheia2015RegisterCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('Cheia2015RegisterCtrl', function ($scope, $rootScope, $http, $location) {
    $scope.user = {
      isMale: true,
      roomType:'不需要安排'
    };
    $rootScope.title = "中国高等教育学会教育信息化分会第六届理事会第二次常务理事会议暨西南地区高校信息化趋势发展研讨会";

    $scope.controls = {
      btnSubmit: {}
    };
    $scope.actions = {
      submit: function () {
        var user = $scope.user;
        if(!(user.name && user.mobile && user.email && user.deptName)){
          alert('请填写完整信息：姓名、性别、手机号码、电子邮件地址、单位名称都必须填写。')
          return;
        }
        user.dept = 'cheia2015';
        $scope.controls.btnSubmit.disabled = true;
        $http.post('http://api.ynu.edu.cn/cheia2015/register', user).success(function(data){
          if(data.errcode == 0){
            alert('您已成功注册。');
            // 跳转到扫描二维码页面
            $location.path('/about/cheia2015');
          } else {
            alert('错误：'+data.msg + '('+data.errcode+')');
          }
          $scope.controls.btnSubmit.disabled = false;
        }).error(function(){
          $scope.controls.btnSubmit.disabled = false;
        });
      }
    }
  });
