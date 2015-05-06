'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:UserConnectWxCtrl
 * @description
 * # UserConnectWxCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('UserConnectWxCtrl', function ($scope, $http, $routeParams,$location) {
    $scope.code = $routeParams.code;
    $scope.state = $routeParams.state;

    $http.post('http://api.ynu.edu.cn/user/getme').success(function(user){
      if(user.wx_userId){
        $scope.me = user;
      } else {
        $scope.url = 'http://api.ynu.edu.cn/eynu/wx/authorize?redirect_url=' + encodeURIComponent($location.absUrl());
      }
    });
    //$http.post('http://api.ynu.edu.cn/eynu/getAuthorizeUrl',{
    //  redirect_url: 'http://wxweb.ynu.edu.cn/#/user/connect_wx'
    //}).success(function(data){
    //  $scope.url = data.url;
    //});
    //$http.post('http://api.ynu.edu.cn/user/current').success(function(data){
    //  $scope.userId = data.wx_userId;
    //});
  });
