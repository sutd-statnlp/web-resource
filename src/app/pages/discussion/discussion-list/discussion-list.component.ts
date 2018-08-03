import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../../core';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {
  discussions: any;

  constructor(private discussionService: DiscussionService) { }

  ngOnInit() {
    this.discussions = this.discussionService.all();
  }

}
