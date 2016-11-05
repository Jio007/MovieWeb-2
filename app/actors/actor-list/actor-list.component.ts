import { Component, OnInit } from "@angular/core";
import { Observable }        from "rxjs/Observable";

import { Actor }        from "../shared/actor.model";
import { ActorService } from "../shared/actor.service";

@Component({
  selector: 'actor-list',
  templateUrl: 'app/actors/actor-list/actor-list.component.html',
  styleUrls: ['app/actors/actor-list/actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  name: string;
  actors: any[];

  constructor(private actorService: ActorService){}

  ngOnInit(){
    this.getActorList();
  }


  getActorList(){
    this.actorService.getActors(this.name)
                      .subscribe(
                        actors => this.actors = actors, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  searchActor(event){
    this.getActorList();
  }


}