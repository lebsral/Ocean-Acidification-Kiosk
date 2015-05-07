angular.module('acidification', [
  'angulartics',
  'angulartics.google.analytics',
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'firebase',
  //'com.2fdevs.videogular.analytics',
  'com.2fdevs.videogular',
  'com.2fdevs.videogular.plugins.controls',
  'com.2fdevs.videogular.plugins.overlayplay',
  'com.2fdevs.videogular.plugins.poster',
  'com.2fdevs.videogular.plugins.buffering'
])

  .run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
    'use strict';
    $rootScope
      .$on('$stateChangeSuccess',
        function (event) {
          if (!$window.ga)
          return;
          $window.ga('send', 'pageview', {
            page: $location.path()
          });
        });
  }])

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
      .state('Press-me', {
        url: '/Press-me',
        templateUrl: 'components/Press-me/partial-Press-me.html'
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
