import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @Input() placeholder: string;
  @Input() texts: string[];
  @Output() searchModelEvent: EventEmitter<string>;
  @ViewChild('typeAheadInstance') typeAheadInstance: NgbTypeahead;
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  searchModel: string;
  recognition: any;
  focusSubject: Subject<string>;
  clickSubject: Subject<String>;

  constructor(
    public recognitionService: SpeechRecognitionService
  ) {
    this.searchModel = '';
    this.searchModelEvent = new EventEmitter<string>();
    this.recognition = this.configRecognition();
    this.focusSubject = new Subject<string>();
    this.clickSubject = new Subject<string>();
  }

  ngOnInit() {
  }

  configRecognition(): any {
    let recognition = this.recognitionService.create();
    if (recognition) {
      recognition.onresult = this.handleRecognitionResult.bind(this);
      recognition.onerror = this.handleRecognitionError.bind(this);
      recognition.onspeechend = () => this.recognition.stop();
    }
    return recognition;
  }

  startDictation(): boolean {
    if (!this.recognition) {
      return false;
    }
    let recognition = this.recognition;
    recognition.start();
    return true;
  }
  handleRecognitionResult(event: any) {
    if (!event) {
      return false;
    }
    this.searchModel = event.results[0][0].transcript;
    this.searchModelEvent.emit(this.searchModel);
    this.searchInput.nativeElement.focus();
    return true;
  }
  handleRecognitionError(event: any): boolean {
    return event ? true : false;
  }
  searchTypeAhead = (textObs: Observable<string>) => {
    let texts = this.texts;
    const debouncedText = textObs.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup = this.clickSubject.pipe(filter(() => !this.typeAheadInstance.isPopupOpen()));
    const inputFocus = this.focusSubject;

    return merge(debouncedText, inputFocus, clicksWithClosedPopup).pipe(
      map(term => (term === '' ? texts.slice(0, 4)
        : this.texts.filter(
          value => value.toLowerCase().includes(term.toLowerCase())
        ).slice(0, 4)
      )
      ));
  }
  submitSearch() {
    this.searchModelEvent.emit(this.searchModel);
  }
}
