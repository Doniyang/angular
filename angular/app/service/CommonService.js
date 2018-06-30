import { DATA,PICTARY, VIDEARY,ROLL } from './DataStore.js';

export default class CommonService { 
   constructor(){}
   getPictureAry(){
       return PICTARY;
   }
   getVideoAry(){
   	 return VIDEARY;
   }
   getGroupList(){
   	  return DATA.groups;
   }
   getRoll(){
      return ROLL;
   }
}
