import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [LayoutComponent]
})
export class TemplateModule { }
