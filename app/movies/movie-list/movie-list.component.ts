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
  name: string;
  movies: Movie[];

  // Constructor with the service injected
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Get movies
    this.getMovies();
  }

  // Get all movies
  getMovies() {
    this.movieService.getMovies(this.name)
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors
                          console.log(err);
                        });
  }

  // Search movies
  searchMovies(list){
    this.movies = list;
  }
}