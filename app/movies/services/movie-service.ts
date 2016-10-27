import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {UtilityComponent} from '../../shared/components/utility.component';

import { Movie } from '../../shared/models/movie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  constructor (private http: Http) {}

  getMovies (): Observable<Movie[]> {
    let moviesUrl = UtilityComponent.getUrl('discover/movie');
    return this.http.get(moviesUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
  }
  
  getMovieById (id: number): Observable<Movie> {
    let moviesUrl = UtilityComponent.getUrl('movie/'+id);
    return this.http.get(moviesUrl)
                  .map(res => res.json())
                  .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg); // log to console instead

    return Observable.throw(errMsg);
  }
}