import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent }    from './movie-list/movie-list.component';
import { MovieService }          from './shared/movie.service';

import { MoviesRoutingModule }   from './movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailsComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule {}