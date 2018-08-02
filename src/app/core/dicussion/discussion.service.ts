import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  constructor() {
  }
  special(): any {
    return [
      {
        title: 'Modelling the past and future',
        sub: `Presentation of paper "Modelling the past and future for neural machine translation" by Allan.`,
        date: new Date('2018-07-25'),
        tags: ['SIS Neural', 'Modelling']
      },
      {
        title: 'Using structure-label system',
        sub: `We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.`,
        date: new Date('2018-07-31'),
        tags: ['SIS Parsing', 'structure-label']
      }
    ]
  }
  recent(): any {
    return [
      {
        title: 'Modelling the past and future',
        sub: `Presentation of paper "Modelling the past and future for neural machine translation" by Allan.`,
        date: new Date('2018-07-25'),
        tags: ['SIS Neural', 'Modelling']
      },
      {
        title: 'Using structure-label system',
        sub: `We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.`,
        date: new Date('2018-07-31'),
        tags: ['SIS Parsing', 'structure-label']
      },
      {
        title: 'Joint Embedding',
        sub: `We talked about the details of the paper Joint Embedding of Words and Labels for Text Classification.`,
        date: new Date('2018-08-01'),
        tags: ['SIS Rep Learning', 'Embedding']
      },
      {
        title: 'Modelling the past and future',
        sub: `Presentation of paper "Modelling the past and future for neural machine translation" by Allan.`,
        date: new Date('2018-07-25'),
        tags: ['SIS Neural', 'Modelling']
      },
      {
        title: 'Using structure-label system',
        sub: `We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.`,
        date: new Date('2018-07-31'),
        tags: ['SIS Parsing', 'structure-label']
      },
      {
        title: 'Joint Embedding',
        sub: `We talked about the details of the paper Joint Embedding of Words and Labels for Text Classification.`,
        date: new Date('2018-08-01'),
        tags: ['SIS Rep Learning', 'Embedding']
      }
    ]
  }
  all(): any {
    return this.recent()
  }
}
