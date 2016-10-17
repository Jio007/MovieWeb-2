// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { MovieListComponent }    from './components/movie-list.component';
import { MovieInfoComponent }    from './components/movie-info.component';

// Route Configuration
export const MovieRoutes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieInfoComponent }
];