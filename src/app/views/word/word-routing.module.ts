import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { WordComponent } from './word.component';

const routes: Routes = [
  <Route>{ path: '', component: WordComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordRoutingModule {}
