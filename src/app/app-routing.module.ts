import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch-program',
    pathMatch: 'full'
  },
  {
    path: 'launch-program',
    loadChildren: () =>
      import('./@view/launch-program/launch-program.module').then((m) => m.LaunchProgramModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
