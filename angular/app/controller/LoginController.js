'use strict';
export default class LoginController{
	constructor($scope,$location){
        $scope.user = {}; 
		this.scope = $scope;
		this.location = $location;
	}

	Sigin(){
		let name = this.scope.user.name;
		let pass = this.scope.user.password;
		if (name && pass) {
			console.log(name);
			this.location.path('./home');
 	    }else{
			console.log('err');
		}
	}
}

// module.exports = exports['default'];

// module.exports = function loginController($scope,$location){
// 	$scope.user = {};
// 	$scope.Sigin = function(){
// 	    var name = $scope.user.name,pass = $scope.user.password;
// 	    if (name && pass) {
// 			console.log(name);
// 			$location.path('./home');
//  	    }else{
// 			console.log('err');
// 		}
// 	 };
// };