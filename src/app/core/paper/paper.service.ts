import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  getKeywords(): string[] {
    return [
      'Embedding',
      'Text classification',
      'semantic regularities',
      'Long Short-Term Memory',
      'semantic-level coverage',
      'look-up keys',
      'neural components'
    ]
  }
  special(): any {
    return this.recent();
  }
  recent(): any {
    return [
      {
        id: 'f94c9f99-aff8-4466-88fd-85717c20438c',
        title: 'Modelling the past and future for neural machine translation',
        abstract: `Existing neural machine translation systems
        do not explicitly model what has been translated
        and what has not during the decoding
        phase...`,
        link: 'http://aclweb.org/anthology/Q18-1011',
        pdf: 'http://aclweb.org/anthology/Q18-1011',
        authors: 7,
        pages: 4
      },
      {
        id: 'e6fcc1c7-4583-4686-a147-39af058489f0',
        title: 'Joint Embedding of Words and Labels for Text Classification',
        abstract: `Word embeddings are effective intermediate representations for capturing semantic regularities between words, when learning...`,
        link: 'https://arxiv.org/abs/1805.04174',
        pdf: 'https://arxiv.org/pdf/1805.04174.pdf',
        authors: 8,
        pages: 11
      }
    ]
  }
  news(): any {
    return this.recent();
  }
  all(): any {
    return this.recent().concat(this.recent());
  }
  get(id: string): any {
    return this.recent()[0];
  }
}
