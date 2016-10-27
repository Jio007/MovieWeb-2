import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movies/components/movie-info.component';
import { MovieListComponent } from './movies/components/movie-list.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
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
