import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import {UtilityComponent} from '../../shared/components/utility.component';

import { Movie }      from './movie.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  // Constructor with injected http
  constructor (private http: Http) {}
  
  // Get movie's details by id
  getMovieById (id: number): Observable<Movie> {
    let moviesUrl = UtilityComponent.getUrl('movie/'+id);
    return this.http.get(moviesUrl)
                  .map(res => res.json())
                  .catch(this.handleError);
  }

  // Get movie list by name
  getMovies (name: string, page: number): Observable<Movie[]> {
    let moviesUrl: string;

    // If name is defined
    if(name) {
      // Get movies by name
      moviesUrl = UtilityComponent.getUrl('search/movie','&query='+name+'&page='+page);
    }else{
      // Get popular movies
      moviesUrl = UtilityComponent.getUrl('discover/movie','&page='+page);
    }
    
    return this.http.get(moviesUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  // Get the movie's videos by id
  getMovieVideos (id: number): Observable<Array<any>> {
    let moviesUrl = UtilityComponent.getUrl('movie/'+id+'/videos');
    return this.http.get(moviesUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  // Get the movie's credit list
  getMovieCredits(id: number){
    let moviesUrl = UtilityComponent.getUrl('movie/'+id+'/credits');
    return this.http.get(moviesUrl)
                  .map(this.extractCast)
                  .catch(this.handleError);
  }

  // Extract response data
  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  // Extract response data
  private extractCast(res: Response) {
    let body = res.json();
    return body.cast || { };
  }

  // Handle errors
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg); // log to console instead

    return Observable.throw(errMsg);
  }
}