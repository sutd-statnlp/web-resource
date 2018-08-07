import { TestBed, inject } from '@angular/core/testing';

import { SpeechRecognitionService } from './speech-recognition.service';

describe('SpeechRecognitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechRecognitionService]
    });
  });

  it('should be created', inject([SpeechRecognitionService], (service: SpeechRecognitionService) => {
    expect(service).toBeTruthy();
  }));

  it('create function should return a recognition or null ', inject([SpeechRecognitionService], (service: SpeechRecognitionService) => {
    expect(service.create()).not.toBeNull();
    service.init = () => null;
    expect(service.create()).toBeNull();
  }));
  it('init should return a recognition or null', inject([SpeechRecognitionService], (service: SpeechRecognitionService) => {
    expect(service.init()).not.toBeNull();
  }));
});
