import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { movieRoutes }    from './movies/movie.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  ...movieRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);