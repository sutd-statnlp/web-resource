import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor() { }

  special(): any {
    return this.recent();
  }
  recent(): any {
    return [
      {
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
        title: 'Joint Embedding of Words and Labels for Text Classification',
        abstract: `Word embeddings are effective intermediate representations for capturing semantic regularities between words, when learning the representations of text sequences...`,
        link: 'https://arxiv.org/abs/1805.04174',
        pdf: 'https://arxiv.org/pdf/1805.04174.pdf',
        authors: 8,
        pages: 11
      }
    ]
  }
  all(): any {
    return this.recent();
  }
  get(id: string): any {
    return this.recent()[0];
  }
}
