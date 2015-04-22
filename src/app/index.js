
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
      });


    $urlRouterProvider.otherwise('/');
  });
