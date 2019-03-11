import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from './people';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  animations: [
    trigger('personAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0, backgroundColor: 'lightblue' }), animate(1000)]),
      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(2000, style({ opacity: 0, backgroundColor: 'red' })))
    ])
  ]
})
export class PeopleComponent implements OnInit {
  people: Array<Person>;

  constructor() {}

  ngOnInit(): void {
    this.people = PEOPLE;
  }

  getDate() {
    return Date.now();
  }
}
