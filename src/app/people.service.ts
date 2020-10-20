import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseListPeople } from './model/responseListPeople.model';
import { Observable } from 'rxjs';
import { Person } from './model/person.model';
import { Film } from './model/film.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly http: HttpClient) {

  }

  getPeople(page: number): Observable<ResponseListPeople> {
    return this.http.get<ResponseListPeople>(`https://swapi.dev/api/people/?page=${page}`);
  }

  getPersonById(id: String): Observable<Person> {
    return this.http.get<Person>(`https://swapi.dev/api/people/${id}`);
  }

  getFilmById(filmId: String): Observable<Film> {
    return this.http.get<Film>(`https://swapi.dev/api/films/${filmId}`);
  }

  getFilmByUrl(url: String): Observable<Film> {
    return this.http.get<Film>(`${url}`);
  }

  getPersonByUrl(url: String): Observable<Person> {
    console.log(url);
    return this.http.get<Person>(`${url}`);
  }

}
