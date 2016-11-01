import { ActivatedRoute }    from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { Movie }        from "../shared/movie.model";
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'movie-details',
  templateUrl: 'app/movies/movie-details/movie-details.component.html',
  styleUrls: ['app/movies/movie-details/movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private sub:any;
  movieInfo: Movie = new Movie();
  videos: any[];

  // Constructor with injected service and route
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
      // Retrieve Movie videos with Id route param
      this.getMovieVideos(id);
    });
  }

  // Get movie details
  getMovieById(id: number){
    this.movieService.getMovieById(id)
                      .subscribe(
                        movieInfo => this.movieInfo = movieInfo, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  // Get movie videos
  getMovieVideos(id: number){
    this.movieService.getMovieVideos(id)
                      .subscribe(
                        videos => this.videos = videos, //Bind to view
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