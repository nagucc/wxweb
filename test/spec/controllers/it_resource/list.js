'use strict';

describe('Controller: ItResourceListCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceListCtrl = $controller('ItResourceListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
