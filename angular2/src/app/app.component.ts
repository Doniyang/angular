import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:`
    <h2>angular2</h2>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <footer>footer</footer>
  `
})
export class AppComponent { }
