import { Component, OnInit } from '@angular/core';

import { DiscussionService, PaperService, IPaper, IDiscussion } from '../../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentPapers: IPaper[];
  recentDiscussions: IDiscussion[];
  newPapers: IPaper[];

  constructor(
    private discussionService: DiscussionService,
    private paperService: PaperService
  ) { }
  ngOnInit() {
    this.paperService.recent()
      .subscribe(items => this.recentPapers = items);
    this.discussionService.recent()
      .subscribe(items => this.recentDiscussions = items);
    this.paperService.news()
      .subscribe(items => this.newPapers = items);
  }

}
