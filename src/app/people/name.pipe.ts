import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './people';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): any {
    const name = `${firstName} ${lastName}`;
    console.log(`Name pipe: ${name}`);
    return name;
  }

}
