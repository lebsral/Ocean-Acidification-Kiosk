angular.module('acidification', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ngMaterial',
  //'angulartics',
  //'com.2fdevs.videogular.analytics',
  'com.2fdevs.videogular',
  'com.2fdevs.videogular.plugins.controls',
  'com.2fdevs.videogular.plugins.overlayplay',
  'com.2fdevs.videogular.plugins.poster'
])

  .config(function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('what-is-oa', {
        url: '/what-is-oa',
        templateUrl: 'components/what-is-oa/partial-what-is-oa.html'
      })
      .state('act-now', {
        url: '/act-now',
        templateUrl: 'components/act-now/partial-act-now.html'
      })
      .state('look-closer', {
        url: '/look-closer',
        templateUrl: 'components/look-closer/partial-look-closer.html'
      })
      .state('oa-facts', {
        url: '/oa-facts',
        templateUrl: 'components/oa-facts/partial-oa-facts.html'
      })
      .state('voices', {
        url: '/voices',
        templateUrl: 'components/voices/partial-voices.html'
      })
      .state('voices.fishermen', {
        templateUrl: 'partial-voices-fishermen.html',
        controller: function ($scope) {
          $scope.fishermen = ['Bob', 'Sue', 'James'];
        }
      });
       $urlRouterProvider.otherwise('/');
  });
