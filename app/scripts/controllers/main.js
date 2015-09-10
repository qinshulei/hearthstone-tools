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

      return ( 70 / 100 * (current_normal / total_normal) * 5  +
               70 / 100 * (1 - current_normal / total_normal) * 40 +
               21.4 / 100 * (current_rare / total_rare) * 20 +
               21.4 / 100 * (1 - current_rare / total_rare) * 100 +
               4.28 / 100 * (current_epic / total_epic) * 100 +
               4.28 / 100 * (1 - current_epic / total_epic) * 400 +
               1.08 / 100 * (current_legend / total_legend) * 400 +
               1.08 / 100 * (1 - current_legend / total_legend) * 1600 +
               1.47 / 100 * (current_gold_normal / total_gold_normal) * 50 +
               1.47 / 100 * (1 - current_gold_normal / total_gold_normal) * 400 +
               1.37 / 100 * (current_gold_rare / total_gold_rare) * 100 +
               1.37 / 100 * (1 - current_gold_rare / total_gold_rare) * 800 +
               0.308 / 100 * (current_gold_epic / total_gold_epic) * 400 +
               0.308 / 100 * (1 - current_gold_epic / total_gold_epic) * 1600 +
               0.111 / 100 * (current_gold_legend / total_gold_legend) * 1600 +
               0.111 / 100 * (1 - current_gold_legend / total_gold_legend) * 3200 ) * 5;
    };

    var season1_data = {
      normal : 94,
      rare : 81,
      epic : 37,
      legend : 33
    };

    var season2_data = {
      normal : 40,
      rare : 37,
      epic : 26,
      legend : 20
    };

    var season3_data = {
      normal : 49,
      rare : 36,
      epic : 27,
      legend : 20
    };

    $scope.seasons = {
      season1 : {
        value : "season1",
        name : "经典",
        data : season1_data,
        total : {
          normal : season1_data.normal * 2,
          rare : season1_data.rare * 2,
          epic : season1_data.epic * 2,
          legend : season1_data.legend,
          gold_normal : season1_data.normal * 2,
          gold_rare : season1_data.rare * 2,
          gold_epic : season1_data.epic * 2,
          gold_legend : season1_data.legend
        },
        current : {
          normal : 0,
          rare : 0,
          epic : 0,
          legend : 0,
          gold_normal : 0,
          gold_rare : 0,
          gold_epic : 0,
          gold_legend : 0
        },
        calc_return : function() {
          return calc(
            $scope.seasons['season1'].total.normal,
            $scope.seasons['season1'].total.rare,
            $scope.seasons['season1'].total.epic,
            $scope.seasons['season1'].total.legend,
            $scope.seasons['season1'].total.gold_normal,
            $scope.seasons['season1'].total.gold_rare,
            $scope.seasons['season1'].total.gold_epic,
            $scope.seasons['season1'].total.gold_legend,
            $scope.seasons['season1'].current.normal,
            $scope.seasons['season1'].current.rare,
            $scope.seasons['season1'].current.epic,
            $scope.seasons['season1'].current.legend,
            $scope.seasons['season1'].current.gold_normal,
            $scope.seasons['season1'].current.gold_rare,
            $scope.seasons['season1'].current.gold_epic,
            $scope.seasons['season1'].current.gold_legend
          );
        }
      },
      season2 : {
        value : "season2",
        name : "侏儒",
        data : season2_data,
        total : {
          normal : season2_data.normal * 2,
          rare : season2_data.rare * 2,
          epic : season2_data.epic * 2,
          legend : season2_data.legend,
          gold_normal : season2_data.normal * 2,
          gold_rare : season2_data.rare * 2,
          gold_epic : season2_data.epic * 2,
          gold_legend : season2_data.legend
        },
        current : {
          normal : 0,
          rare : 0,
          epic : 0,
          legend : 0,
          gold_normal : 0,
          gold_rare : 0,
          gold_epic : 0,
          gold_legend : 0
        },
        calc_return : function() {
          return calc(
            $scope.seasons['season2'].total.normal,
            $scope.seasons['season2'].total.rare,
            $scope.seasons['season2'].total.epic,
            $scope.seasons['season2'].total.legend,
            $scope.seasons['season2'].total.gold_normal,
            $scope.seasons['season2'].total.gold_rare,
            $scope.seasons['season2'].total.gold_epic,
            $scope.seasons['season2'].total.gold_legend,
            $scope.seasons['season2'].current.normal,
            $scope.seasons['season2'].current.rare,
            $scope.seasons['season2'].current.epic,
            $scope.seasons['season2'].current.legend,
            $scope.seasons['season2'].current.gold_normal,
            $scope.seasons['season2'].current.gold_rare,
            $scope.seasons['season2'].current.gold_epic,
            $scope.seasons['season2'].current.gold_legend
          );
        }
      },
      season3 : {
        value : "season3",
        name : "冠军",
        data : season3_data,
        total : {
          normal : season3_data.normal * 2,
          rare : season3_data.rare * 2,
          epic : season3_data.epic * 2,
          legend : season3_data.legend,
          gold_normal : season3_data.normal * 2,
          gold_rare : season3_data.rare * 2,
          gold_epic : season3_data.epic * 2,
          gold_legend : season3_data.legend
        },
        current : {
          normal : 0,
          rare : 0,
          epic : 0,
          legend : 0,
          gold_normal : 0,
          gold_rare : 0,
          gold_epic : 0,
          gold_legend : 0
        },
        calc_return : function() {
          return calc(
            $scope.seasons['season3'].total.normal,
            $scope.seasons['season3'].total.rare,
            $scope.seasons['season3'].total.epic,
            $scope.seasons['season3'].total.legend,
            $scope.seasons['season3'].total.gold_normal,
            $scope.seasons['season3'].total.gold_rare,
            $scope.seasons['season3'].total.gold_epic,
            $scope.seasons['season3'].total.gold_legend,
            $scope.seasons['season3'].current.normal,
            $scope.seasons['season3'].current.rare,
            $scope.seasons['season3'].current.epic,
            $scope.seasons['season3'].current.legend,
            $scope.seasons['season3'].current.gold_normal,
            $scope.seasons['season3'].current.gold_rare,
            $scope.seasons['season3'].current.gold_epic,
            $scope.seasons['season3'].current.gold_legend
          );
        }
      }
    };

    $scope.current_season = 'season1';
  });
