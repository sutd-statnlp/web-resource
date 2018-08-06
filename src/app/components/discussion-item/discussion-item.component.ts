import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discussion-item',
  templateUrl: './discussion-item.component.html',
  styleUrls: ['./discussion-item.component.scss']
})
export class DiscussionItemComponent implements OnInit {
  @Input() discussion: any;
  @Input() hoverAction: string = 'card-lift--hover';

  constructor() { }

  ngOnInit() {
  }

}
