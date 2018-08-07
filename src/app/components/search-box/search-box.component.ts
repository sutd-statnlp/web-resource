import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SpeechRecognitionService } from '../../share/recognition/speech-recognition.service';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchModel: string;
  @Output() searchModelEvent: EventEmitter<string>;
  @Input() placeholder: string;
  recognition: any;
  @Input() texts: string[];
  focusSubject: Subject<string>;
  clickSubject: Subject<String>;
  @ViewChild('typeAheadInstance') typeAheadInstance: NgbTypeahead;

  constructor(
    private recognitionService: SpeechRecognitionService
  ) {
    this.searchModel = '';
    this.searchModelEvent = new EventEmitter<string>();
    this.recognition = this.recognitionService.create();
    this.recognition.onresult = this.handleRecognitionResult.bind(this);
    this.recognition.onerror = this.handleRecognitionError.bind(this);
    this.focusSubject = new Subject<string>();
    this.clickSubject = new Subject<string>();
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
  handleRecognitionResult(event: any): boolean {
    if (!event) {
      return false;
    }
    this.searchModel = event.results[0][0].transcript;
    this.searchModelEvent.emit(this.searchModel);
    return true;
  }
  handleRecognitionError(event: any): boolean {
    return !event;
  }
  searchTypeAhead = (textObs: Observable<string>) => {
    let texts = this.texts;
    const debouncedText = textObs.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup = this.clickSubject.pipe(filter(() => !this.typeAheadInstance.isPopupOpen()));
    const inputFocus = this.focusSubject;

    return merge(debouncedText, inputFocus, clicksWithClosedPopup).pipe(
      map(term => (term === '' ? texts
        : this.texts.filter(
          value => value.toLowerCase().includes(term.toLowerCase())
        )
      )
      ));
  }
}
