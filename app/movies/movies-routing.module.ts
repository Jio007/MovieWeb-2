import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent }    from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

// Route Configuration
export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule {}