import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './user/dashboard/dashboard/dashboard.component';
import { PickerComponent } from './user/binary/picker/picker.component';

export const routes: Routes = [
  { path: 'picker', component: PickerComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }



