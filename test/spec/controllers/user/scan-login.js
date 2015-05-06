'use strict';

describe('Controller: UserScanLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var UserScanLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserScanLoginCtrl = $controller('UserScanLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
