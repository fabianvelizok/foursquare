import { Pipe, PipeTransform } from '@angular/core';
import linkifyStr from 'linkifyjs/lib/linkify-string';

@Pipe({
  name: 'linkifystring'
})

export class LinkifyStringPipe implements PipeTransform {
  transform(str: string): string {
    return str ? linkifyStr(str, {target: '_system'}) : str;
  }
}
