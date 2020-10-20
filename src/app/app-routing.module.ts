import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmInfoComponent } from './film-info/film-info.component';
import { PeopleComponent } from './people/people.component';
import { PersonInfoComponent } from './person-info/person-info.component';

const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'people/:id', component: PersonInfoComponent},
  {path: 'films/:id', component: FilmInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
