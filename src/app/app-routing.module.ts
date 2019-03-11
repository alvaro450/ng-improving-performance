import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PeopleModule } from './people/people.module';

const routes: Routes = [
  {
    path: 'people',
    // component: PeopleComponent
    loadChildren: './people/people.module#PeopleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
