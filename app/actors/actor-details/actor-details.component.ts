import { ActivatedRoute }    from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Observable }        from 'rxjs/Observable';

import { Actor }        from "../shared/actor.model";
import { ActorService } from "../shared/actor.service";

@Component({
  selector: 'actor-details',
  templateUrl: 'app/actors/actor-details/actor-details.component.html',
  styleUrls: ['app/actors/actor-details/actor-details.component.css']
})

export class ActorDetailsComponent implements OnInit {
  private subscribe: any;
  actorInfo: Actor = new Actor();
  movies: any[];

  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    // Subscribe to route params
    this.subscribe = this.route.params.subscribe(params => {
      let id = params['id'];
      // Retrieve Movie's information with Id route param
      this.getActorDetails(id);
      this.getActorMovies(id);
    });
  }

  // Get the actor details
  getActorDetails(id: number){
    this.actorService.getActorDetails(id)
                      .subscribe(
                        actorInfo => this.actorInfo = actorInfo, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  // Get the actor's movies
  getActorMovies(id: number){
    this.actorService.getActorMovies(id)
                      .subscribe(
                        movies => this.movies = movies, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  ngOnDestroy() {
    // Clean subscribe to avoid memory leak
    this.subscribe.unsubscribe();
  }

}