import { Component, OnInit } from '@angular/core';
import { DiscussionService, IDiscussion } from '../../../core';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {
  discussions: IDiscussion[];
  recognition: any;
  searchText: string;
  discussionKeywords: string[];

  constructor(
    private discussionService: DiscussionService
  ) {
    this.searchText = '';
    this.discussions = [];
    this.discussionKeywords = [];
  }

  ngOnInit() {
    this.discussionService.all()
      .subscribe(items => this.discussions = items);

    this.discussionService.getKeywords()
      .subscribe(items => this.discussionKeywords = items);
  }
  searchModelEvent(text: string) {
    this.searchText = text;
  }
  isSearching(): boolean {
    return this.searchText.trim() !== '';
  }
}
