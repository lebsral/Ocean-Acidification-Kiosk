'use strict';
describe('Controller: OAFactsCtrl', function () {
// load the controller's module
  beforeEach(module('acidification'));
  var OAFactsCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    actnowCtrl = $controller('OAFactsCtrl', {
      $scope: scope
    });
  }));

});
