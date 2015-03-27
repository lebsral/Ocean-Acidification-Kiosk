'use strict';

angular.module('acidification', [
		'ngAnimate',
		'ngCookies',
		'ngTouch',
		'ngSanitize',
		'ngResource',
		'ui.router',
		'ngMaterial',
		'angulartics',
		'angulartics.google.analytics'
		])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
