"use strict";angular.module("hearthstoneToolsApp",["ngAnimate","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hearthstoneToolsApp").controller("MainCtrl",["$scope",function(a){var b=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return 5*(.7*(i/a)*5+.7*(1-i/a)*40+.214*(j/b)*20+.214*(1-j/b)*100+4.28/100*(k/c)*100+4.28/100*(1-k/c)*400+.0108*(l/d)*400+.0108*(1-l/d)*1600+.0147*(m/e)*50+.0147*(1-m/e)*400+.0137*(n/f)*100+.0137*(1-n/f)*800+.00308*(o/g)*400+.00308*(1-o/g)*1600+.00111*(p/h)*1600+.00111*(1-p/h)*3200)},c={normal:94,rare:81,epic:37,legend:33},d={normal:40,rare:37,epic:26,legend:20},e={normal:49,rare:36,epic:27,legend:20};a.seasons={season1:{value:"season1",name:"经典",data:c,total:{normal:2*c.normal,rare:2*c.rare,epic:2*c.epic,legend:c.legend,gold_normal:2*c.normal,gold_rare:2*c.rare,gold_epic:2*c.epic,gold_legend:c.legend},current:{normal:0,rare:0,epic:0,legend:0,gold_normal:0,gold_rare:0,gold_epic:0,gold_legend:0},calc_return:function(){return b(a.seasons.season1.total.normal,a.seasons.season1.total.rare,a.seasons.season1.total.epic,a.seasons.season1.total.legend,a.seasons.season1.total.gold_normal,a.seasons.season1.total.gold_rare,a.seasons.season1.total.gold_epic,a.seasons.season1.total.gold_legend,a.seasons.season1.current.normal,a.seasons.season1.current.rare,a.seasons.season1.current.epic,a.seasons.season1.current.legend,a.seasons.season1.current.gold_normal,a.seasons.season1.current.gold_rare,a.seasons.season1.current.gold_epic,a.seasons.season1.current.gold_legend)}},season2:{value:"season2",name:"侏儒",data:d,total:{normal:2*d.normal,rare:2*d.rare,epic:2*d.epic,legend:d.legend,gold_normal:2*d.normal,gold_rare:2*d.rare,gold_epic:2*d.epic,gold_legend:d.legend},current:{normal:0,rare:0,epic:0,legend:0,gold_normal:0,gold_rare:0,gold_epic:0,gold_legend:0},calc_return:function(){return b(a.seasons.season2.total.normal,a.seasons.season2.total.rare,a.seasons.season2.total.epic,a.seasons.season2.total.legend,a.seasons.season2.total.gold_normal,a.seasons.season2.total.gold_rare,a.seasons.season2.total.gold_epic,a.seasons.season2.total.gold_legend,a.seasons.season2.current.normal,a.seasons.season2.current.rare,a.seasons.season2.current.epic,a.seasons.season2.current.legend,a.seasons.season2.current.gold_normal,a.seasons.season2.current.gold_rare,a.seasons.season2.current.gold_epic,a.seasons.season2.current.gold_legend)}},season3:{value:"season3",name:"冠军",data:e,total:{normal:2*e.normal,rare:2*e.rare,epic:2*e.epic,legend:e.legend,gold_normal:2*e.normal,gold_rare:2*e.rare,gold_epic:2*e.epic,gold_legend:e.legend},current:{normal:0,rare:0,epic:0,legend:0,gold_normal:0,gold_rare:0,gold_epic:0,gold_legend:0},calc_return:function(){return b(a.seasons.season3.total.normal,a.seasons.season3.total.rare,a.seasons.season3.total.epic,a.seasons.season3.total.legend,a.seasons.season3.total.gold_normal,a.seasons.season3.total.gold_rare,a.seasons.season3.total.gold_epic,a.seasons.season3.total.gold_legend,a.seasons.season3.current.normal,a.seasons.season3.current.rare,a.seasons.season3.current.epic,a.seasons.season3.current.legend,a.seasons.season3.current.gold_normal,a.seasons.season3.current.gold_rare,a.seasons.season3.current.gold_epic,a.seasons.season3.current.gold_legend)}}},a.current_season="season1"}]),angular.module("hearthstoneToolsApp").controller("AboutCtrl",["$scope",function(a){}]);