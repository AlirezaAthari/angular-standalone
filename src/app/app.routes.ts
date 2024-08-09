import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lazy-component',
    loadComponent: () =>
      import('./lazy-component/lazy-component.component').then(
        (m) => m.LazyComponent
      ),
  },
];
