import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';

import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MoviesModule,
    ActorsModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
