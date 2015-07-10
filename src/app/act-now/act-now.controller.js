(function() {
  'use strict';

  angular
    .module('acidification')
    .controller('ActnowController', ActnowController);

  /** @ngInject */
  function ActnowController($scope, $firebaseArray) {
    var vm = this;

    var ref = new Firebase('https://oceanacidification.firebaseio.com/');
    $scope.emails = $firebaseArray(ref);

  // provide a method for adding an email
    $scope.addEmail = function (newEmail) {
      if (newEmail) {
        // push a message to the end of the array
        $scope.emails.$add({
          emailAddress: newEmail
        });

      }
    };
  }});
