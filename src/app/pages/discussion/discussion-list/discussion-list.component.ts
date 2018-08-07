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
  discussionTitles: string[];

  constructor(
    private discussionService: DiscussionService
  ) {
    this.searchText = '';
  }

  ngOnInit() {
    this.discussions = this.discussionService.all();
    this.discussionTitles = this.discussionService.getTitles();
  }
  searchModelEvent(text: string) {
    this.searchText = text;
  }
}
