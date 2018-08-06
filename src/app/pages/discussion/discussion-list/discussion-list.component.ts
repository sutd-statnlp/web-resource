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
  searchModel: string;

  constructor(
    private discussionService: DiscussionService
  ) {
    this.searchModel = '';
  }

  ngOnInit() {
    this.discussions = this.discussionService.all();
  }
}
