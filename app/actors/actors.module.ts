import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ActorDetailsComponent } from './actor-details/actor-details.component'
import { ActorListComponent }    from './actor-list/actor-list.component'
import { ActorSearchComponent }  from './actor-search/actor-search.component'
import { ActorsRoutingModule }   from './actors-routing.module'
import { ActorService }          from './shared/actor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ActorsRoutingModule
  ],
  declarations: [
    ActorDetailsComponent,
    ActorListComponent,
    ActorSearchComponent
  ],
  providers: [
    ActorService
  ]
})
export class ActorsModule{}