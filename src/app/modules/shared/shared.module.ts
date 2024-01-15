import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material/material.module';
import { NgxsModule } from '@ngxs/store';
import { MatXtndModule } from '@ngjoy/mat-xtnd';
import { UxModule } from '../ux/ux.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    NgxsModule,
    MatXtndModule,
    UxModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    MatXtndModule,
    UxModule
  ]
})
export class SharedModule { }
