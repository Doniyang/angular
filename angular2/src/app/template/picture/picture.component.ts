import { Component } from '@angular/core';

@Component({
	template : '<h1>{{items}}<h1>'
})

export class PictureComponent {
       Items = '';
      constructor(){
          this.Items = 'hell angular2'
      }
};