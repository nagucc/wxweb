'use strict';

describe('Controller: ItResourceAddCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceAddCtrl = $controller('ItResourceAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
