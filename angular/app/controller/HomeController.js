/* angular.module('ngRouteExample').controller('ChapterController', function($scope, $routeParams) {
 *          $scope.name = 'ChapterController';
 *          $scope.params = $routeParams;
 * })
 */
import CommonService from '../service/CommonService.js';
export default class HomeController{
    constructor($scope){
       let service = new CommonService();
       let picAry = service.getPictureAry();
       $scope.pictAry = picAry.slice(0,4);
       $scope.videAry = service.getVideoAry();
       $scope.ngSwiper = true;
       this.scope = $scope;
    }
 }
// module.exports = function HomeController($scope){
// 	// var service = require('../service/index.js'),
// 	picAry = service.pictAry,
// 	videos = service.videAry;
// 	var pAry = [];
// 	for (var i = 0; i < 4; i++) {
// 		pAry.push(picAry[i]);
// 	}
// 	$scope.pictAry = pAry;
//     $scope.videAry = videos;
//     $scope.ngSwiper = true;
// };