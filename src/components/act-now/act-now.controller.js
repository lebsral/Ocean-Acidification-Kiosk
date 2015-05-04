angular.module('acidification')


  .controller('Act-NowCtrl',
    ["$scope", "$firebaseArray",
        function ($scope, $firebaseArray) {
        'use strict';
        var ref = new Firebase("https://oceanacidification.firebaseio.com/");

        $scope.emails = $firebaseArray(ref);


              // provide a method for adding an email
        $scope.addEmail = function (newEmail) {
          var CurrentDateTime =  new Date().getTime() / 1000;
          if (newEmail) {
        // push a message to the end of the array
            $scope.emails.$add({timeStamp: CurrentDateTime, emailAddress: newEmail});
          }
        };


    //Code here
      }
        ]);
