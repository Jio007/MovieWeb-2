import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable }  from 'rxjs/Observable';

import { Actor }        from '../shared/actor.model';
import { ActorService } from '../shared/actor.service';

@Component({
  selector: 'actor-search',
  templateUrl: 'app/actors/actor-search/actor-search.component.html',
  styleUrls: ['app/actors/actor-search/actor-search.component.css']
})
export class ActorSearchComponent {
  actors: any[];
  name: string;
  @Output() listActors = new EventEmitter();

  // Constructor
  constructor(private actorService: ActorService){}

  // Search actors
  searchActors(){
    this.searchActorsByName();
    // Emit the listActors fot the child components (ActorListComponent)
    this.listActors.emit(this.actors);
  }

  // Search actors by name
  searchActorsByName(){
    this.actorService.getActors(this.name)
                     .subscribe(
                       actors => this.actors = actors,
                       err => {
                          // Log errors if any
                          console.log(err);
                        });
  }

}