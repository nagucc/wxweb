'use strict';

describe('Controller: ItResourceAddMonitorCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceAddMonitorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceAddMonitorCtrl = $controller('ItResourceAddMonitorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
