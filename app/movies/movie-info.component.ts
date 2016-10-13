import { Component, Input } from "@angular/core";
import { Movie } from "../shared/models/movie";

@Component({
  selector: 'movie-info',
   template: `
    <div >
      <h2>{{ movie.original_title }} <small>{{ movie.overview }}</small></h2>
    </div>
  `
})
export class MovieInfoComponent {
	 @Input() movie: Movie;
}