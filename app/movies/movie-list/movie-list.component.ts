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
  page: number = 1;
  movieName: string;

  // Constructor with the service injected
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Get movies
    this.getMovies(this.name, this.page);
  }

  // Get all movies
  getMovies(name: string, page: number) {
    this.movieService.getMovies(name, page)
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors
                          console.log(err);
                        });
  }

  // Search movies
  searchMovies(list){
    this.page = 1;
    this.movies = list.movies;
    this.movieName = list.movieName;
  }

  // Pagination movie list
  paginate (step: string){
    if(step == 'next') {
      this.page++;
    }else{
      if(this.page > 1) {
        this.page--;
      }else{
        this.page = 1;
      }
    }
    this.getMovies(this.movieName, this.page);
    setTimeout(() => window.scrollTo(0, 0), 1);
  }
}