import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(array : any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    const priorityOrder = ['High', 'Medium', 'Low'];

    array.sort((a, b) => {
      return priorityOrder.indexOf(a[field]) - priorityOrder.indexOf(b[field]);
    });
    return array;
  }

}
