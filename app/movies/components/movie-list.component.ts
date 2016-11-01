import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MovieService } from '../services/movie-service';
import { Movie } from "../../shared/models/movie";

@Component({
  selector: 'movie-list',
  providers: [MovieService],
  templateUrl: 'app/movies/views/movie-list.component.html',
  styleUrls: ['app/movies/assets/movie-list.component.css']
})
export class MovieListComponent  implements OnInit{
  movies: Movie[];

  // Constructor with injected service
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Load comments
    this.getMovies();
  }

  getMovies() {
    // Get all comments
    this.movieService.getMovies()
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }
}