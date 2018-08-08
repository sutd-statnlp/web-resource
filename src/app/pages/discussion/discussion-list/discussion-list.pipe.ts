import { Pipe, PipeTransform } from '@angular/core';
import { IDiscussion } from '../../../core';

@Pipe({
  name: 'discussionList'
})
export class DiscussionListPipe implements PipeTransform {

  transform(discussions: IDiscussion[], keyword: string): any {
    if (!keyword) {
      return discussions;
    }
    keyword = keyword.trim().toLowerCase();
    return discussions.filter(item =>
      item.title.trim().toLowerCase().includes(keyword) ||
      item.sub.trim().toLowerCase().includes(keyword)
    );
  }

}
