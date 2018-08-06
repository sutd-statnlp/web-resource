import { Component, OnInit } from '@angular/core';

import { DiscussionService, PaperService } from '../../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentPapers: any;
  recentDiscussions: any;
  newPapers: any;

  constructor(
    private discussionService: DiscussionService,
    private paperService: PaperService
  ) { }
  ngOnInit() {
    this.recentPapers = this.paperService.recent();
    this.recentDiscussions = this.discussionService.recent();
    this.newPapers = this.paperService.news();
  }

}
