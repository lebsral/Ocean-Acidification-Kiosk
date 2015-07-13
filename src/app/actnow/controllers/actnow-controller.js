'use strict';
/**
 * @ngdoc function
 * @name acidification.controller:actnowCtrl
 * @description
 * # actnowCtrl
 * Controller of the acidification
 */
angular.module('acidification')
  .controller('actnowCtrl', function ($scope, $firebaseArray) {


    var ref = new Firebase('https://oceanacidification.firebaseio.com/');
    $scope.emails = $firebaseArray(ref);

  // provide a method for adding an email
    $scope.addEmail = function (newEmail, newFirstName, newLastName) {
      if (newEmail) {
        // push a message to the end of the array
        $scope.emails.$add({
          emailAddress: newEmail,
          firstName: newFirstName,
          lastName: newLastName

        });

      }
    };



  });
