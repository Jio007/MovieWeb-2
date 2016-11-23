import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';

import { Movie }        from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'movie-search',
  templateUrl: 'app/movies/movie-search/movie-search.component.html',
  styleUrls: ['app/movies/movie-search/movie-search.component.css']
})
export class MovieSearchComponent {
  movies: Movie[];
  name: string;
  page: number = 1;
  @Output() listMovies = new EventEmitter();

  // Constructor with injected service
  constructor(private movieService: MovieService){}

  searchMovie(event){
    this.getMoviesByName();
    // Emit the listMovies fot the child components (MovieListComponent)
    this.listMovies.emit({movies: this.movies, movieName: this.name});
  }

  // Get movies by name
  getMoviesByName() {
    this.movieService.getMovies(this.name, this.page)
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

}
