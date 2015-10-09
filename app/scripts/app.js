'use strict';

/**
 * @ngdoc overview
 * @name iSquareWebApp
 * @description
 * # iSquareWebApp
 *
 * Main module of the application.
 */
angular
  .module('iSquareWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/datagenerator', {
        templateUrl: 'views/datagenerator.html',
        controller: 'DatageneratorCtrl',
        controllerAs: 'datagenerator'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
