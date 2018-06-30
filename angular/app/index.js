import HomeController from './controller/HomeController.js';
import LoginController from './controller/LoginController.js';
import PictureController from './controller/PictureController.js';
import VideoController from './controller/VideoController';
import ArticleController from './controller/ArticleController';

module.exports = angular.module('app',['ngRoute','ngAnimate']).config(['$routeProvider', function($routeProvider) { 
  $routeProvider.when('/login',{
      controller: LoginController,
      controllerAs:'Lo', 
      templateUrl: './module/login.html' 
    }).when('/picture', { 
      controller: PictureController,
      controllerAs:'p',
      templateUrl : './module/picture.html' 
    }).when('/video',{
    	 controller: VideoController,
       controllerAs:'Vi', 
       templateUrl : './module/video.html'  
    }).when('/home' , {
    	controller : HomeController,
    	controllerAs:'HomeCtr',
    	templateUrl : './module/home.html'
    }).when('/article',{
      controller: ArticleController,
      controllerAs:'Ar', 
      templateUrl : './module/article.html'
    }).otherwise({
    	redirectTo: '/home'
    }); 
}]).directive("ngSwiper", function($interval,$animate){
    return {
    	restrict :'A',
    	link : function(scope, element, attrs){
              let width = document.body.clientWidth;
              let move = width - 80;
              scope.$watch(attrs.ngSwiper, function(flag){
                
                 if (flag) {
                  angular.forEach(element.children(),function(i,m){
                      // $interval(function(){
                      //     // var g = 0;
                      //     let px = m*move;
                      //     console.log(px);
                      //     angular.element(i).css({'transform':'translateX('+px+'px)'});
                      //     // g++
                      // },20000);
                    });
                 }
             });
        }
    };
}).directive('ngPicker',function(){
         return {
              restrict:'AE',
              replace : false,
              scope : false,
              templateUrl : './module/date.html',
              controller : ['$scope',function($scope){
                  var date = new Date();
                  $scope.year = date.getFullYear();
                  $scope.month = date.getMonth()+1;
                  $scope.dateList = iDates(date);
                  $scope.hours = date.getHours();
                  $scope.minutes = date.getMinutes();
                  $scope.seconds = date.getSeconds();
                  
                  function fresh(){
                      $scope.year = date.getFullYear();
                      $scope.month = date.getMonth()+1;
                      $scope.dateList = iDates(date);
                      $scope.hours = date.getHours();
                      $scope.minutes = date.getMinutes();
                      $scope.seconds = date.getSeconds();
                  }
                  function isLeapYear(year){
                      return (year%4===0&&year%100 !==0)||(year%100===0&&year%400===0);
                  }
                  function iDates(date){
                       var year = date.getFullYear(),month=date.getMonth()+1;
                       var day = new Date(year+'-'+month+'-01').getDay(),map = [];
                       switch(month){
                            case 1 : {
                                map = iSet(31,day);
                                break;
                            }
                            case 2 : {
                               map = isLeapYear(year) ? iSet(29,day):iSet(28,day);
                               break;
                            }
                            case 3 : {
                               map = iSet(31,day);
                               break;
                            }
                            case 4 : {
                               map = iSet(30,day);
                               break;
                            }
                             case 5 : {
                               map = iSet(31,day);
                               break;
                            }
                            case 6 : {
                               map = iSet(30,day);
                               break;
                            }
                             case 7 : {
                               map = iSet(31,day);
                               break;
                            }
                            case 8 : {
                               map = iSet(31,day);
                               break;
                            }
                             case 9 : {
                               map = iSet(30,day);
                               break;
                            }
                            case 10 : {
                               map = iSet(31,day);
                               break;
                            }
                             case 11 : {
                               map = iSet(30,day);
                               break;
                            }
                            case 12 : {
                               map = iSet(31,day);
                               break;
                            }
                           default:{
                              break;
                           }
                       }
                      return map;
                  }
                  function iSet(date,day){
                       var list = [];
                       for (var i = 0; i < day; i++) {
                           list.push(' ');
                        }
                        for (var k = 0; k < date; k++) {
                           list.push(k+1);
                        }
                       return list;
                  }
              }],
              link : function(scope,element,attrs,ctrl){
                  
              } 
         };
});
