import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/roadmap' },
  {
    path: 'welcome/:param',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
  {
    path: 'roadmap',
    loadChildren: () =>
      import('./pages/roadmap/roadmap.routes').then((m) => m.ROADMAP_ROUTES),
  },
];
