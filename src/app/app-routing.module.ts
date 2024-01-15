import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  <Route>{
    path: '',
    component: AppComponent,
    children: [
      <Route>{
        path: 'excel',
        loadChildren: () =>
          import('./views/excel/excel.module').then((m) => m.ExcelModule),
      },
      <Route>{
        path: 'word',
        loadChildren: () =>
          import('./views/word/word.module').then((m) => m.WordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
