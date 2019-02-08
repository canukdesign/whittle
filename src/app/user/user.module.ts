import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinaryModule } from './binary/binary.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    BinaryModule,
    DashboardModule
  ],
  declarations: []
})
export class UserModule { }
