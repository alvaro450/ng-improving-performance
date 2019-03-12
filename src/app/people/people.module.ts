import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
