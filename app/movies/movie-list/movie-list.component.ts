import { Component, OnInit} from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { Movie }        from "../shared/movie.model";
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'movie-list',
  templateUrl: 'app/movies/movie-list/movie-list.component.html',
  styleUrls: ['app/movies/movie-list/movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movies: Movie[];

  // Constructor with injected service
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Load comments
    this.getMovies();
  }

  // Get all movies
  getMovies() {
    this.movieService.getMovies()
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }
}