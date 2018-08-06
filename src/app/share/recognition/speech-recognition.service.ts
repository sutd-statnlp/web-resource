import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  create(): any {
    if (!window.hasOwnProperty('webkitSpeechRecognition')) {
      return null;
    }
    let recognition = new window['webkitSpeechRecognition']();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    return recognition;
  }
}
