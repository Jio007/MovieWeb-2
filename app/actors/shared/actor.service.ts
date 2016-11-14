import { Injectable }     from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {UtilityComponent} from '../../shared/components/utility.component';

import { Actor } from "./actor.model";
import { Movie } from "../../movies/shared/movie.model";

@Injectable()
export class ActorService{

  constructor(private http: Http){}

  // Get the actor details by actor id
  getActorDetails (id: number): Observable<Actor> {
    let apiUrl = UtilityComponent.getUrl('person/'+id);
    return this.http.get(apiUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  // Get the actor's movies by actor id
  getActorMovies (id: number): Observable<Array<any>>{
    let apiUrl = UtilityComponent.getUrl('person/'+id+'/movie_credits');
    return this.http.get(apiUrl)
                    .map(this.extractCast)
                    .catch(this.handleError);
  }

  // Get the actors list
  getActors (name:string, page: number): Observable<Array<any>>{
    let apiUrl: string;

    // if name is defined
    if(name) {
       // Get actors by name
       apiUrl = UtilityComponent.getUrl('search/person','&query='+name+'&page='+page);
    }else{
      // Get popular actors
      apiUrl = UtilityComponent.getUrl('person/popular', '&page='+page);
    }

    return this.http.get(apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // Extract response data
  private extractCast(res: Response) {
    let body = res.json();
    return body.cast || { };
  }

  // Extract response data
  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  // Handle errors
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg); // log to console instead

    return Observable.throw(errMsg);
  }

}