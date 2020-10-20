import { Component, OnInit } from '@angular/core';
import { ResponseListPeople } from './../model/responseListPeople.model';
import { Person } from './../model/person.model';
import { PeopleService } from './../people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {


  currentPage = 1;
  responseListPeople: ResponseListPeople;
  people: Person[];

  constructor(private readonly peopleService: PeopleService,
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPeople(1);
  }

  getPeople(page: number): void{
    this.peopleService.getPeople(page)
    .subscribe(peopleList => {
      this.people = peopleList.results;
      console.log(this.people);
    });
  }

  openPerson(person: Person): void{
    const url = person.url;
    const id = url.match(/([\d]+)/)[0];
    this.router.navigate([id], {relativeTo: this.route});
  
     //this.router.navigate(["/people/2"]);
  }

  next(): void{
    this.currentPage++;
    this.getPeople(this.currentPage);
  }

}
