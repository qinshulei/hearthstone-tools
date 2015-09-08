'use strict';

/**
 * @ngdoc overview
 * @name hearthstoneToolsApp
 * @description
 * # hearthstoneToolsApp
 *
 * Main module of the application.
 */
angular
  .module('hearthstoneToolsApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
