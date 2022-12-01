import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return args[0] === 'uppercase' ? value.toUpperCase() : value.toLowerCase();
  }

}
