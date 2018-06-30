import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureComponent } from './template/picture/picture.component';
import { VideoComponent } from './template/video/video.component';
import { PoetryComponent } from './template/poetry/poetry.component';

const AppRoutes : Routes = [
  { path : 'picture',component : PictureComponent },
  { path : 'video', component : VideoComponent },
  { path : 'poetry', component : PoetryComponent }
];
@NgModule({
	imports : [
      RouterModule.forRoot(AppRoutes)
	],
	exports : [
       RouterModule
	]
})
export class AppRouter {};