'use strict';

/**
 * @ngdoc function
 * @name hearthstoneToolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearthstoneToolsApp
 */
angular.module('hearthstoneToolsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
