'use strict';

/**
 * @ngdoc function
 * @name hearthstoneToolsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hearthstoneToolsApp
 */
angular.module('hearthstoneToolsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
