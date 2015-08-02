'use strict';
/**
 * @ngdoc function
 * @name acidification.controller:actnowCtrl
 * @description
 * # actnowCtrl
 * Controller of the acidification
 */
angular.module('acidification')
  .controller('actnowCtrl', function ($scope, $firebaseArray, $location, $mdToast, $timeout) {


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

  var newMessageRef = ref.push();


     $timeout(function() {
      $location.path("/");
      }, 300000);


  function focus(){
  return {
    link: function(scope, element) {
      element[0].focus();
    }
  };
}

    // provide a method for adding an email
    $scope.addEmail = function (newEmail, newFirstName, newLastName, newPlace, newOAList, newCoalList, newLegList) {
      if (newEmail) {

        newMessageRef.set({ 'emailAddress': newEmail, 'firstName': newFirstName, 'lastName': newLastName, 'place': newPlace, 'OAList': newOAList, 'coalList': newCoalList, 'LegList': newLegList });
        // pushes a message to the end of the array

       displayToast('success', 'Thanks for helping out.  We will contact you.');

        $location.path("/");
      }
    };
  });
