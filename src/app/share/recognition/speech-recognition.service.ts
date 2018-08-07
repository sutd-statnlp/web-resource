import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  init(): any {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      return new window['webkitSpeechRecognition']()
    }
    if (window.hasOwnProperty('SpeechRecognition')) {
      return new window['SpeechRecognition']()
    }
    return null;
  }
  create(): any {
    let recognition = this.init();

    if (!recognition) {
      return null;
    }
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;
    return recognition;
  }
}
