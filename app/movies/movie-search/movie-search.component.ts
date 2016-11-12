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
  @Output() listMovies = new EventEmitter();

  // Constructor with injected service
  constructor(private movieService: MovieService){}

  searchMovie(event){
    this.getMoviesByName();
    // Emit the listMovies fot the child components (MovieListComponent)
    this.listMovies.emit(this.movies);
  }

  // Get movies by name
  getMoviesByName() {
    this.movieService.getMovies(this.name)
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  // Pagination
  /*@HostListener('window:scroll', ['$event'])
    track(event) {
      let windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      let body = document.body, html = document.documentElement;
      let docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      let windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        let nextPage = this.page++;
        this.getMoviesByName(this.name, nextPage);
        console.log(this.page);
      }
    }*/
}
