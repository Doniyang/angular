import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { PictureComponent } from './template/picture/picture.component';
import { NavComponent } from './template/navbar/nav.component';
import { VideoComponent } from './template/video/video.component';
import { PoetryComponent } from './template/poetry/poetry.component';
import { AppRouter } from './app.router';


import { AppServer } from './server/app.server';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRouter
  ],
  declarations: [ 
     AppComponent,
     NavComponent,
     PictureComponent,
     VideoComponent,
     PoetryComponent
  ],
  providers: [
    AppServer
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }