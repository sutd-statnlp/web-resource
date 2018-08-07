import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paperList'
})
export class PaperListPipe implements PipeTransform {

  transform(papers: any[], keyword: string): any {
    if (!keyword) {
      return papers;
    }
    keyword = keyword.trim().toLowerCase();
    return papers.filter(item =>
      item.title.toLowerCase().includes(keyword) ||
      item.abstract.toLowerCase().includes(keyword)
    );
  }

}
