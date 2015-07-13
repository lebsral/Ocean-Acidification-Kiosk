'use strict';
describe('Controller: actnowCtrl', function () {
// load the controller's module
  beforeEach(module('acidification'));
  var actnowCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    actnowCtrl = $controller('actnowCtrl', {
      $scope: scope
    });
  }));

});
