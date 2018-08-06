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
  searchModel: string;

  constructor(
    private discussionService: DiscussionService,
    private recognitionService: SpeechRecognitionService
  ) {
    this.searchModel = '';
    this.recognition = this.recognitionService.create();
    this.recognition.onresult = this.handleRecognitionResult;
    this.recognition.onerror = this.handleRecognitionError;
  }

  ngOnInit() {
    this.discussions = this.discussionService.all();
  }

  startDictation(): boolean {
    if (!this.recognition) {
      return false;
    }
    let recognition = this.recognition;
    recognition.start();
    return true;
  }
  handleRecognitionResult(event: any): boolean{
    if (!event) {
      return false;
    }
    this.searchModel = event.results[0][0].transcript;
    return true;
  }
  handleRecognitionError(event: any): boolean {
    return !event;
  }
}
