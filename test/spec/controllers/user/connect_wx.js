'use strict';

describe('Controller: UserConnectWxCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var UserConnectWxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserConnectWxCtrl = $controller('UserConnectWxCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
