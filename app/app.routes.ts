// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieRoutes }    from './movies/movie.routes';

// Route Configuration
export const routes: Routes = [
{
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  ...MovieRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);