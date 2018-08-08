import { Pipe, PipeTransform } from '@angular/core';
import { IPaper } from '../../../core';

@Pipe({
  name: 'paperList'
})
export class PaperListPipe implements PipeTransform {

  transform(papers: IPaper[], keyword: string): any {
    if (!keyword) {
      return papers;
    }
    keyword = keyword.trim().toLowerCase();
    return papers.filter(item =>
      item.title.toLowerCase().includes(keyword) ||
      item.abs.toLowerCase().includes(keyword)
    );
  }

}
