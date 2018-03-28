import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
/**
 * Sorts array of object by field specified as a parameter
 */
export class SortPipe implements PipeTransform {

  transform(value: any, field: string): string {
    if (value.length === 0) {
      return value;
    }

    return value.sort((item1, item2) => item1[field].localeCompare(item2[field]));
  }

}
