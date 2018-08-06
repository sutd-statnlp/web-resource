import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discussion-item',
  templateUrl: './discussion-item.component.html',
  styleUrls: ['./discussion-item.component.scss']
})
export class DiscussionItemComponent implements OnInit {
  @Input() discussion: any;

  constructor() { }

  ngOnInit() {
  }

}
