'use strict';

/**
 * @ngdoc function
 * @name wxwebApp.controller:UserScanLoginCtrl
 * @description
 * # UserScanLoginCtrl
 * Controller of the wxwebApp
 */
angular.module('wxwebApp')
  .controller('UserScanLoginCtrl', function ($scope, User) {
  	User.getTicket(function (ticket) {
  		$scope.ticket = ticket.data;
  	});
  });