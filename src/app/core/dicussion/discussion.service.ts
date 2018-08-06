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
        tags: ['SIS Neural', 'Modelling'],
        attendees: 8,
        sections: [
          `Adding FUTURE and PAST two vectors to the attention based NMT model to keep track of the content which has been translated and hasn't been translated. The FUTURE layer is initialized with the last hidden state of the encoder and updated with subtraction ideally. The PAST layer is initialized with 0 vector and updated with addition.`,
          `Explicit soft loss added for FUTURE and PAST two vectors to make sure certain consistency between the updates in FUTURE/PAST vector and the generated word's embedding in the timestamp.`,
          `An experiment shows that the initialization of attention-based decoder doesn't make much difference.`
        ],
        nextMeeting: 'Presentation of paper "Attention is All You Need" by Zhang Yan.'
      },
      {
        title: 'Using structure-label system',
        sub: `We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.`,
        date: new Date('2018-07-31'),
        tags: ['SIS Parsing', 'structure-label'],
        attendees: 8,
        sections: [
          `We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.`,
          `They used spans as elements in the stacks of their transition-based systems and proved a optimal dynamic oracle to reach the final configuration.`,
          `Takeaway: we can use the difference between the foward (backward) LSTMs at two positions as the span representation.`
        ],
        nextMeeting: `We will be discussing the paper "Constituency Parsing with a Self-Attentive Encoder" .`
      }
    ]
  }
  recent(): any {
    return this.special();
  }
  all(): any {
    return this.recent()
  }
  get(id: string): any {
    return this.recent()[0];
  }
}
