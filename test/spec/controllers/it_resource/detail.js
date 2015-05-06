'use strict';

describe('Controller: ItResourceDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var ItResourceDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItResourceDetailCtrl = $controller('ItResourceDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
