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
  page: number = 1;
  actors: any[];
  actorName: string;

  constructor(private actorService: ActorService){}

  ngOnInit(){
    // Get the actors list
    this.getActorList(this.name, this.page);
  }

  // Get the actors list
  getActorList(name: string, page: number){
    this.actorService.getActors(name, page)
                      .subscribe(
                        actors => this.actors = actors, //Bind to view
                        err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

  // Search actors
  searchActors(list){
    this.page = 1;
    this.actors = list.actors;
    this.actorName = list.actorName;
  }

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
    this.getActorList(this.actorName, this.page);
    setTimeout(() => window.scrollTo(0, 0), 1);
  }

}