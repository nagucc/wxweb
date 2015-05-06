'use strict';

describe('Controller: AboutCheia2015Ctrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var AboutCheia2015Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCheia2015Ctrl = $controller('AboutCheia2015Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
