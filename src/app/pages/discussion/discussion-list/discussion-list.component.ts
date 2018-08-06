import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../../core';
import { SpeechRecognitionService } from '../../../share';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {
  discussions: any;
  recognition: any;
  searchModel: any;

  constructor(
    private discussionService: DiscussionService,
    private recognitionService: SpeechRecognitionService
  ) {
    this.searchModel = '';
    this.recognition = this.recognitionService.create();
  }

  ngOnInit() {
    this.discussions = this.discussionService.all();
  }

  startDictation() {
    if (!this.recognition) {
      return false;
    }
    let recognition = this.recognition;
    recognition.start();
    return true;
  }
}
