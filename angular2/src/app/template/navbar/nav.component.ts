import { Component,OnInit } from '@angular/core';

import { AppServer } from '../../server/app.server';
@Component({
	selector : 'nav-bar',
	template : `
       <header>
           <nav>
              <span *ngFor="let nav of navList" class="navItem">
                 <a [routerLink]="nav.url">
                   <b>{{nav.name}}</b>
                 </a>
              </span>
           </nav>
       </header>
	`,
	styles : [`
       header{
          padding : 0;
          margin : 0;
          background : #024ef9;
       }
       nav{
          height : 80px;
          width : 100%;
          padding : 0 40px; 
       }
       .navItem {
          height : 60px;
          width : 120px;
          display: inline-block;
          margin: 10px 0;
       }
       .navItem a{
          height : 60px;
          width : 120px;
          text-align:center;
          line-height : 60px;
          color : #FFF;
          display: inline-block;
          text-decoration: none;
       }

       .navItem a:hover{
         background : #F3F3F3;
         color:#000;
       }
	`]
})

export class NavComponent implements OnInit{
    navList : any[];
	constructor(private appServer: AppServer) { };

	ngOnInit(): void {
       this.navList = this.appServer.getNavBar();
    }
}