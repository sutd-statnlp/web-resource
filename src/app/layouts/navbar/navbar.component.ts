import { Component, OnInit } from '@angular/core';
import { DiscussionService, PaperService, IPaper, IDiscussion } from '../../core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  specialPapers: IPaper[];
  specialDiscussions: IDiscussion[];

  constructor(
    private discussionService: DiscussionService,
    private paperService: PaperService
  ) {

  }
  ngOnInit() {
    this.paperService.special()
      .subscribe(items => this.specialPapers = items);
    this.discussionService.special()
      .subscribe(items => this.specialDiscussions = items);
  }

}
