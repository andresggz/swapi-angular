import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { PeopleService } from './../people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Film } from '../model/film.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  id: string;
  person: Person;
  filmUrls: String[];
  films: Film[] = [];

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly peopleService: PeopleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      console.log(this.id);
      this.getPerson();
      //this.getFilms();
    });
  }

  getPerson(){
    console.log(this.id);
    this.peopleService.getPersonById(this.id)
        .subscribe(person => {
          this.person = person;
          this.getFilms();
        })
  }

  getFilms(): void{
    
    this.filmUrls = this.person.films;
    //console.log("here-> " +this.filmUrls);
    for(let film of this.filmUrls){
      this.peopleService.getFilmByUrl(film)
      .subscribe(filmFound =>{
        console.log("film!!!->> "+ filmFound.producer);
        this.films.push(filmFound);
        console.log("here for -> " + this.films.length);
      }
        );
    }
    console.log("here -> " + this.films.length);
  }

  goToFilm(film: Film): void{
     const urlFilm = film.url;
     const id = urlFilm.match(/([\d]+)/)[0];
    
     this.router.navigate([`/films/${id}`]);
  }
}
