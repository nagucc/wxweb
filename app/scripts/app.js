'use strict';

/**
 * @ngdoc overview
 * @name wxwebApp
 * @description
 * # wxwebApp
 *
 * Main module of the application.
 */
angular
  .module('wxwebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formFor',
    'formFor.bootstrapTemplates',
    'flashr',
    'monospaced.qrcode',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/user/new/:userId/mpId/:mpId/ticket/:ticket', {
        templateUrl: 'views/user/edit.html',
        controller: 'UserNewCtrl'
      })
      .when('/user/cheia2015', {
        templateUrl: 'views/user/edit.html',
        controller: 'UserCheia2015Ctrl'
      })
      .when('/about/cheia2015', {
        templateUrl: 'views/about/cheia2015.html',
        controller: 'AboutCheia2015Ctrl'
      })
      .when('/cheia2015/register', {
        templateUrl: 'views/cheia2015/register.html',
        controller: 'Cheia2015RegisterCtrl'
      })
      .when('/user/connect_wx', {
        templateUrl: 'views/user/connect_wx.html',
        controller: 'UserConnectWxCtrl'
      })
      .when('/it_resource/add', {
        templateUrl: 'views/it_resource/edit.html',
        controller: 'ItResourceAddCtrl'
      })
      .when('/it_resource/detail/:resId', {
        templateUrl: 'views/it_resource/detail.html',
        controller: 'ItResourceDetailCtrl'
      })
      .when('/it_resource/list', {
        templateUrl: 'views/it_resource/list.html',
        controller: 'ItResourceListCtrl'
      })
      .when('/user/scan-login', {
        templateUrl: 'views/user/scan-login.html',
        controller: 'UserScanLoginCtrl'
      })
      .when('/it_resource/add-monitor/:resId', {
        templateUrl: 'views/it_resource/add-monitor.html',
        controller: 'ItResourceAddMonitorCtrl'
      })
      .when('/it_resource/add-url-monitor/:resId', {
        templateUrl: 'views/it_resource/add-url-monitor.html',
        controller: 'ItResourceAddUrlMonitorCtrl'
      })
      .when('/it_resource/add-port-monitor/:resId', {
        templateUrl: 'views/it_resource/add-port-monitor.html',
        controller: 'ItResourceAddPortMonitorCtrl'
      })
      .otherwise({
        redirectTo: '/it_resource/add'
      });
  })

  // https://github.com/Schlogen/angular-confirm
  // 用于支持confirm
  .controller('ConfirmModalController', ['$scope', '$modalInstance', 'data', function ($scope, $modalInstance, data) {
    $scope.data = angular.copy(data);

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  .value('$confirmModalDefaults', {
    template: '<div class="modal-header"><h3 class="modal-title">Confirm</h3></div><div class="modal-body">{{data.text}}</div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">确定</button><button class="btn btn-warning" ng-click="cancel()">取消</button></div>',
    controller: 'ConfirmModalController'
  })
  .factory('$confirm', ['$modal', '$confirmModalDefaults', function($modal, $confirmModalDefaults) {
    return function(data, settings) {
      settings = angular.extend($confirmModalDefaults, (settings || {}));
      data = data || {};
      
      if ('templateUrl' in settings && 'template' in settings) {
        delete settings.template;
      }
      
      settings.resolve = {data: function() { return data; }};

      return $modal.open(settings).result;
    };
  }])
  .directive('confirm', ['$confirm', function($confirm) {
      return {
        priority: 1,
        restrict: 'A',
        scope: {
          confirmIf: "=",
          ngClick: '&',
          confirm: '@'
        },
        link: function(scope, element, attrs) {
          function reBind(func) {
            element.unbind("click").bind("click", function() {
              func();
            });
          }
          
          function bindConfirm() {
            $confirm({text: scope.confirm}).then(scope.ngClick);
          }
          
          if ('confirmIf' in attrs) {
            scope.$watch('confirmIf', function(newVal) {
              if (newVal) {
                reBind(bindConfirm);
             } else {
                reBind(function() {
                  scope.$apply(scope.ngClick);
                }); 
              }
            });
          } else {
            reBind(bindConfirm);
          }
        }
      }
  }]);
