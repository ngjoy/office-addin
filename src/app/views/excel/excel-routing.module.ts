import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { ExcelComponent } from './excel.component';

const routes: Routes = [
  <Route>{ path: '', component: ExcelComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelRoutingModule {}
