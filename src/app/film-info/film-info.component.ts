import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss']
})
export class FilmInfoComponent implements OnInit {

  filmId: String;
  film: Film;
  characters:  Person[] = [];
  charactersUrl: String[];

  constructor(private readonly peopleService: PeopleService,
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filmId = params.get("id");
      console.log("Info film id = " + this.filmId);
      this.getFilm();
    })
  }

  getFilm(): void{
      this.peopleService.getFilmById(this.filmId)
            .subscribe(film => {
              this.film = film;
              this.getCharacters();
            }
              );
  }

  getCharacters(): void{
    this.charactersUrl = this.film.characters;

    for(let characterUrl of this.charactersUrl){
      this.peopleService.getPersonByUrl(characterUrl)
      .subscribe(characterFound => 
        this.characters.push(characterFound));
    }
  }

  goToCharacter(character: Person){
    //console.log("Going to character " + character.name );
    const characterId = character.url.match(/([\d]+)/)[0];

    this.router.navigate([`/people/${characterId}`])
  }

}
