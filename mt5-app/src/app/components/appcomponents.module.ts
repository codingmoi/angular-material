import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({  
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class AppComponentsModule { }