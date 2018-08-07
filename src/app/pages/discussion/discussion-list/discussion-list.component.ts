import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../../core';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {
  discussions: any;
  recognition: any;
  searchText: string;
  discussionKeywords: string[];

  constructor(
    private discussionService: DiscussionService
  ) {
    this.searchText = '';
  }

  ngOnInit() {
    this.discussions = this.discussionService.all();
    this.discussionKeywords = this.discussionService.getKeywords();
  }
  searchModelEvent(text: string) {
    this.searchText = text;
  }
}
