import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLandingComponent } from './home/home-landing/home-landing.component';
import { DashLandingComponent } from './user/dash/dash-landing/dash-landing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeLandingComponent },
  { path: 'user', component: DashLandingComponent }
];

@NgModule({
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }



