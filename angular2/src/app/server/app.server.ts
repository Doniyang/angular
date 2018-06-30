import { Injectable } from '@angular/core';
 
 const Navs = [
      {
         url : './picture',
         name: '图片'
      },{
        url : './video',
        name : '视频'
      },{
         url : './poetry',
         name : '诗歌'
      }
	]
@Injectable()
export class AppServer {
	getNavBar(){
	  return Navs;
	}
}