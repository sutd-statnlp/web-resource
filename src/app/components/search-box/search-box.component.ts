import { Component, OnInit, Input } from '@angular/core';
import { SpeechRecognitionService } from '../../share/recognition/speech-recognition.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchModel: string;
  @Input() placeholder: string;
  recognition: any;

  constructor(
    private recognitionService: SpeechRecognitionService
  ) {
    this.recognition = this.recognitionService.create();
    this.recognition.onresult = this.handleRecognitionResult;
    this.recognition.onerror = this.handleRecognitionError;
  }

  ngOnInit() {
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
