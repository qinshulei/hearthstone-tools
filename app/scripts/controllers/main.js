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
    $scope.season1 = {
      normal : 94,
      rare : 81,
      epic : 37,
      legend :33
    };

    $scope.season1_total = {
      normal : $scope.season1.normal * 2,
      rare : $scope.season1.rare * 2,
      epic : $scope.season1.epic * 2,
      legend : $scope.season1.legend,
      gold_normal : $scope.season1.normal * 2,
      gold_rare : $scope.season1.rare * 2,
      gold_epic : $scope.season1.epic * 2,
      gold_legend : $scope.season1.legend
    };

    $scope.season1_current = {
      normal : 0,
      rare : 0,
      epic : 0,
      legend : 0,
      gold_normal : 0,
      gold_rare : 0,
      gold_epic : 0,
      gold_legend : 0
    };

    var calc = function(
      total_normal,
      total_rare,
      total_epic,
      total_legend,
      total_gold_normal,
      total_gold_rare,
      total_gold_epic,
      total_gold_legend,
      current_normal,
      current_rare,
      current_epic,
      current_legend,
      current_gold_normal,
      current_gold_rare,
      current_gold_epic,
      current_gold_legend){

      return ( 70 / 100 * (current_normal / total_normal) * 5  + 70 / 100 * (1 - current_normal / total_normal) * 40 +
               21.4 / 100 * (current_rare / total_rare) * 20 + 21.4 / 100 * (1 - current_rare / total_rare) * 100 +
               4.28 / 100 * (current_epic / total_epic) * 100 + 4.28 / 100 * (1 - current_epic / total_epic) * 400 +
               1.08 / 100 * (current_legend / total_legend) * 400 + 1.08 / 100 * (1 - current_legend / total_legend) * 1600 +
               1.47 / 100 * (current_gold_normal / total_gold_normal) * 50 + 1.47 / 100 * (1 - current_gold_normal / total_gold_normal) * 400 +
               1.37 / 100 * (current_gold_rare / total_gold_rare) * 100 + 1.37 / 100 * (1 - current_gold_rare / total_gold_rare) * 800 +
               0.308 / 100 * (current_gold_epic / total_gold_epic) * 400 + 0.308 / 100 * (1 - current_gold_epic / total_gold_epic) * 1600 +
               0.111 / 100 * (current_gold_legend / total_gold_legend) * 1600 + 0.111 / 100 * (1 - current_gold_legend / total_gold_legend) * 3200 ) * 5;
    };

    $scope.calc_season1 = function(){
      return calc(
        $scope.season1_total.normal,
        $scope.season1_total.rare,
        $scope.season1_total.epic,
        $scope.season1_total.legend,
        $scope.season1_total.gold_normal,
        $scope.season1_total.gold_rare,
        $scope.season1_total.gold_epic,
        $scope.season1_total.gold_legend,
        $scope.season1_current.normal,
        $scope.season1_current.rare,
        $scope.season1_current.epic,
        $scope.season1_current.legend,
        $scope.season1_current.gold_normal,
        $scope.season1_current.gold_rare,
        $scope.season1_current.gold_epic,
        $scope.season1_current.gold_legend
      );
    };

  });
