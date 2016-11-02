import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent }    from './movie-list/movie-list.component';
import { MovieSearchComponent }  from './movie-search/movie-search.component';
import { MovieService }          from './shared/movie.service';

import { MoviesRoutingModule }   from './movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MovieSearchComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule {}