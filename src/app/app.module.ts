import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonInfoComponent } from './person-info/person-info.component';
import { FilmInfoComponent } from './film-info/film-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonInfoComponent,
    FilmInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
