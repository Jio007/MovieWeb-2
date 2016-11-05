import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {UtilityComponent} from '../../shared/components/utility.component';

import { Actor } from "./actor.model";
import { Movie } from "../../movies/shared/movie.model";

@Injectable()
export class ActorService{

  constructor(private http: Http){}

  getActorDetails (id: number): Observable<Actor> {
    let apiUrl = UtilityComponent.getUrl('person/'+id);
    return this.http.get(apiUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getActorMovies (id: number): Observable<Array<any>>{
    let apiUrl = UtilityComponent.getUrl('person/'+id+'/movie_credits');
    return this.http.get(apiUrl)
                    .map(this.extractCast)
                    .catch(this.handleError);
  }

  getActors (name:string): Observable<Array<any>>{
    let apiUrl: string;

    if(name) {
       apiUrl = UtilityComponent.getUrl('search/person','&query='+name);
    }else{
       apiUrl = UtilityComponent.getUrl('person/popular');
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