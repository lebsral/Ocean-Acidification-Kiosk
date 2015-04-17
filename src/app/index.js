
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
//    $stateProvider
//      .state('home', {
//        url: '/',
//        templateUrl: 'app/what-is-oa/partial-what-is-oa.html',
//        controller: 'what-is-oa.controller'
//      })

        $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home.what-is-oa', {
        url: '/what-is-oa',
        templateUrl: 'app/what-is-oa/partial-what-is-oa.html',
        controller: 'what-is-oa.controller'
      });


   // $urlRouterProvider.otherwise('/');
  });
