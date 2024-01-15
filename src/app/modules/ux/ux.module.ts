
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '@material/material.module';
import { getAllModuleComponents } from './components/all';

@NgModule({
  declarations: [
    ...getAllModuleComponents()
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ],
  exports: [
    ...getAllModuleComponents()
  ]
})
export class UxModule { }
