import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private list: any[];
  private map: Map<string, number>;
  constructor () {
    this.list = [
      {
        id: '99a756e2-bfd9-49db-b193-9b2cc0c4cae4',
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
        id: 'a3950520-12df-4f67-bf2c-fb8f80377a83',
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
    this.map = this.loadMap(this.list);
  }
  loadMap(list: any[]): Map<string, number> {
    let map = new Map<string,number>();
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      map.set(item.id, index);
    }
    return map;
  }
  getKeywords(): string[] {
    return [
      'Modelling',
      'neural',
      'structure-label',
      'transition-based',
      'constituency parsing',
      'optimal dynamic oracle',
      'span representation'
    ]
  }
  getTitles(): string[] {
    let titles = [];
    this.all().forEach(item => {
      titles.push(item.title);
    });
    return titles;
  }
  special(): any[] {
    return this.list;
  }
  recent(): any[] {
    return this.list;
  }
  all(): any[] {
    return this.list;
  }
  getIndex(id: string): number {
    return this.map.get(id);
  }
  get(id: string): any {
    let index = this.getIndex(id);
    if (index === undefined) {
      return null;
    }
    return this.list[index];
  }
  setList(list: any[]): boolean {
    this.list = list;
    this.map = this.loadMap(this.list);
    return this.map.size > 0;
  }
  getNextID(id: string): string {
    let index = this.getIndex(id);
    if (index === undefined) {
      return null;
    }
    index = index + 1;
    if (index >= this.list.length || index < 0) {
      return null;
    }
    return this.list[index].id;
  }
  getPreviousID(id: string): string {
    let index = this.getIndex(id);
    if (index === undefined) {
      return null;
    }
    index = index - 1;
    if (index >= this.list.length || index < 0) {
      return null;
    }
    return this.list[index].id;
  }
}
