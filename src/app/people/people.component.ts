import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PEOPLE, Person } from './people';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // trigger('personAnimation', [
    //   // the "in" style determines the "resting" state of the element when it is visible.
    //   state('in', style({ opacity: 1 })),

    //   // fade in when created. this could also be written as transition('void => *')
    //   transition(':enter', [style({ opacity: 0, backgroundColor: 'lightblue' }), animate(1000)]),
    //   // fade out when destroyed. this could also be written as transition('void => *')
    //   transition(':leave', animate(2000, style({ opacity: 0, backgroundColor: 'red' })))
    // ])
  ]
})
export class PeopleComponent implements OnInit, OnDestroy {
  people: Array<Person>;
  searchFormGroup: FormGroup;
  searchControl: AbstractControl;
  subscriptions: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.people = PEOPLE;

    // search form
    this.searchFormGroup = this.fb.group({
      search: ['']
    });

    this.searchControl = this.searchFormGroup.get('search');

    // search action
    const searchSubscription = this.searchControl.valueChanges.pipe(
        debounceTime(500), distinctUntilChanged()).subscribe((searchValue: string) => {
      const searchBy = !!searchValue ? searchValue.toLowerCase() : null;

      // on clear, reset the collection
      if (searchBy === null) {
          this.people = [...PEOPLE];
      } else {
        this.people = PEOPLE.filter(p => {
          return p.firstName.toLowerCase().includes(searchBy) || p.lastName.toLowerCase().includes(searchBy);
        });
      }

      this.cdr.markForCheck();
    });

    this.subscriptions.add(searchSubscription);

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getName(person: Person) {
    const name =  `${person.firstName} ${person.lastName}`;
    console.log(`getName: ${name}, id: ${person.id}`);
    return `${name}`;
  }

  reset() {
    this.searchControl.reset();
  }

  trackById(index, person: Person) {
    return person.id;
  }

  updateFirst() {
    const firstPerson = Object.assign({}, PEOPLE[0]);
    firstPerson.firstName = 'John';
    firstPerson.lastName = 'Smith';
    this.people = [firstPerson, ...PEOPLE.slice(1, PEOPLE.length)];
  }
}
