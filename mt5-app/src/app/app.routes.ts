import { Routes } from '@angular/router';
import { LayoutComponent } from './template/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, 
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
];