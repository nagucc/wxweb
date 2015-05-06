'use strict';

describe('Controller: ItResourceAddPortMonitorCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceAddPortMonitorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceAddPortMonitorCtrl = $controller('ItResourceAddPortMonitorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
