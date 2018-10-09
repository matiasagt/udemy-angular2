import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

//Services
import { PeliculasService } from "./services/peliculas.service";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
