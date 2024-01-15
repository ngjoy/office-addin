import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordRoutingModule } from './word-routing.module';
import { MaterialComponentsModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { getComponents } from './all';

@NgModule({
  declarations: [...getComponents()],
  providers: [],
  imports: [
    CommonModule,
    WordRoutingModule,
    SharedModule,
    MaterialComponentsModule,
  ],
})
export class WordModule {}
