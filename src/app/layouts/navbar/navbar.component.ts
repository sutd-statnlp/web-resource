import { Component, OnInit } from '@angular/core';
import { DiscussionService, PaperService } from '../../core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  specialPapers: any;
  specialDiscussions: any;

  constructor(
    private discussionService: DiscussionService,
    private paperService: PaperService
  ) {

  }
  ngOnInit() {
    this.specialPapers = this.paperService.special();
    this.specialDiscussions = this.discussionService.special();
  }

}
