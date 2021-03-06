import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscussionService, IDiscussion } from '../../../core';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {
  discussion: IDiscussion;
  id: string;
  nextId: string;
  previousId: string;

  constructor(
    private route: ActivatedRoute,
    private discussionService: DiscussionService
  ) {
    route.params.subscribe(() => this.initialize());
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.discussion = this.discussionService.get(id);
    this.previousId = this.discussionService.getPreviousID(id);
    this.nextId = this.discussionService.getNextID(id);
  }
}
