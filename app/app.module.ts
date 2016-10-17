import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movies/components/movie-info.component';
import { MovieListComponent } from './movies/components/movie-list.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	HttpModule,
  	JsonpModule,
    routing
  ],
  declarations: [ 
  	AppComponent, 
  	MovieInfoComponent,
    MovieListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
