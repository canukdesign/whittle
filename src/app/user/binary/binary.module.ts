import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PickerComponent } from './picker/picker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PickerComponent]
})
export class BinaryModule { }
