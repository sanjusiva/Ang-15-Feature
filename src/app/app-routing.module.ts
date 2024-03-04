import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { TypedFormComponent } from './typed-form/typed-form.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'typedForm' },
  { path: 'typedForm', title: 'form', component: TypedFormComponent },
  {
    path: 'lazyload',
    title: 'lazy',
    loadChildren: () =>
      import('./lazyload/lazyload.module').then((mod) => mod.LazyloadModule),
  },
  {
    path: 'newload',
    loadComponent: () =>
      import('./newload/newload.component').then((res) => res.NewloadComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
