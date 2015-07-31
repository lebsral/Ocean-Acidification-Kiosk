'use strict';
/**
 * @ngdoc function
 * @name acidification.controller:actnowCtrl
 * @description
 * # actnowCtrl
 * Controller of the acidification
 */
angular.module('acidification')
  .controller('actnowCtrl', function ($scope, $firebaseArray, $location, $mdToast) {


  var displayToast = function(type, msg) {

    $mdToast.show({
        template: '<md-toast class="md-toast ' + type +'"><h2>' + msg + '</h2></md-toast>',
        hideDelay: 15000,
        position: 'top'
    });
};


    $scope.newPlace = null;
    $scope.autocompleteOptions = {
      types: ['(cities)']
    };

    $scope.newOAList = true;
    $scope.newCoalList = false;
    $scope.newLegList = false;

    var ref = new Firebase('https://oceanacidification.firebaseio.com/');
    $scope.emails = $firebaseArray(ref);

    // provide a method for adding an email
    $scope.addEmail = function (newEmail, newFirstName, newLastName, newPlace, newOAList, newCoalList, newLegList) {
      if (newEmail) {
        // push a message to the end of the array
        $scope.emails.$add({
          emailAddress: newEmail,
          firstName: newFirstName,
          lastName: newLastName,
          place: newPlace,
          OAList: newOAList,
          coalList: newCoalList,
          LegList: newLegList
        });
       displayToast('success', 'Thanks for helping out.  We will contact you.');

        $location.path("/");
      }
    };
  });
