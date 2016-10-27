import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MovieService } from '../services/movie-service';
import { Movie } from "../../shared/models/movie";

@Component({
  selector: 'movie-info',
  providers: [MovieService],
  templateUrl: 'app/movies/views/movie-info.component.html'
})
export class MovieInfoComponent implements OnInit {
  private sub:any;
  movieInfo: Movie = new Movie();

  // Constructor with injected service
  constructor(
    private movieService: MovieService, 
    private route: ActivatedRoute
  ) {}

  // Load data ones componet is ready
  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      // Retrieve Movie with Id route param
      this.getMovieById(id);
    });
  }

  getMovieById(id: number){
    // Get all comments
    this.movieService.getMovieById(id)
                      .subscribe(
                        movieInfo => this.movieInfo = movieInfo, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}