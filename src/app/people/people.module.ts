import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [PeopleComponent, NamePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
