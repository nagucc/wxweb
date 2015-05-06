'use strict';

describe('Controller: ItResourceAppUrlMonitorCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceAppUrlMonitorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceAppUrlMonitorCtrl = $controller('ItResourceAppUrlMonitorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
