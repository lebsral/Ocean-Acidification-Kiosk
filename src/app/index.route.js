(function () {
  'use strict';

  angular
    .module('acidification')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/Splash/splash.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('act-now', {
        url: '/act-now',
        templateUrl: 'app/act-now/act-now.html',
        controller: 'actnowCtrl',
        controllerAs: 'actnow'
      })
      .state('whatis', {
        url: '/whatis',
        templateUrl: 'app/whatis/whatis.html',
        controller: 'WhatIsController',
        controllerAs: 'whatis'
      })
      .state('lookcloser', {
        url: '/lookcloser',
        templateUrl: 'app/lookcloser/lookcloser.html',
        controller: 'LookCloserController',
        controllerAs: 'lookcloser'
      })
      .state('voices', {
        url: '/voices',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('OAFacts', {
        url: '/OAFacts',
        templateUrl: 'app/OAFacts/OAFacts.html',
        controller: 'OAFactsCtrl',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
