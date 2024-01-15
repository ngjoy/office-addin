import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelRoutingModule } from './excel-routing.module';
import { MaterialComponentsModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { getComponents, getProviders } from './all';

@NgModule({
  declarations: [...getComponents()],
  providers: [...getProviders()],
  imports: [
    CommonModule,
    ExcelRoutingModule,
    SharedModule,
    MaterialComponentsModule,
  ],
})
export class ExcelModule {}
