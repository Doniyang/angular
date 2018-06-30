import { Component } from '@angular/core';

@Component({
	template : `
       <div class="ts-poe-view">
         <div class="ts-poe-header">
           <h2>如梦令</h2>
           <h3>{{name}}</h3>
           <span>&nbsp;&nbsp;&nbsp;&nbsp;--李清照</span>
         </div>
         <div class="ts-poe-main">
            <span>
                   <a></a>
                   <a></a>
            </span>
            <p class="ts-slide-item">
              <i>曾记溪亭日暮，</i>
              <i>沉醉不知归路。</i>
              <i>兴尽晚回舟，</i>
              <i>误入藕花深处。</i>
              <i>怎渡，怎渡？</i>
              <i>惊起一滩鸥鹭。</i>
            </p>  
         </div>
       </div>
	`,
	styles : [`
       .ts-poe-view{
          padding:0 10px;
          margin : 0;
          background : #f0f4f6;
       }
       .ts-poe-header{
          padding-top: 20px;
          text-align:center;
       }
       .ts-poe-main{
         padding:20px 0;
         text-align:center;
       }
       h2,p{
         -webkit-margin-before: 0;
         -webkit-margin-after: 0;
       }  
	`]  
})

export class PoetryComponent {
  
};