import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      var a=val.first_name.toLocaleLowerCase();
      var b=val.first_name.toUpperCase();
      return (a.toLocaleLowerCase().includes(args) || b.toUpperCase().includes(args) ); 
    })
  }


}
