'use strict';

describe('Controller: ItResourceViewCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceViewCtrl = $controller('ItResourceViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
