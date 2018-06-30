import CommonService from '../service/CommonService.js';
export default class ArticleController{
	constructor($scope){
       this.service =  new CommonService();
       $scope.ary = [0,1,2,2,3,3];
       this.scope = $scope;

       this.roll();    
	}  
	pack(a) {
		console.log(a.currentTarget);
		this.scope.isPack = true;
	}

    roll(){
        this.scope.roList = this.service.getRoll();
    }

}