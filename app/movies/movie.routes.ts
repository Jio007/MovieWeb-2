import { Routes } from '@angular/router';

import { MovieListComponent }    from './components/movie-list.component';
import { MovieInfoComponent }    from './components/movie-info.component';

// Route Configuration
export const movieRoutes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieInfoComponent }
];