import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponentsModule } from './components/appcomponents.module';
import { TemplateModule } from './template/template.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppComponentsModule,
    RouterModule.forRoot(ROUTES),
    TemplateModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
