'use strict';

describe('Controller: Cheia2015RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('wxwebApp'));

  var Cheia2015RegisterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Cheia2015RegisterCtrl = $controller('Cheia2015RegisterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
