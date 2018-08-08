import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract.service';
import { Observable, of } from 'rxjs';
import { IPaper } from './paper.model';

@Injectable({
  providedIn: 'root'
})
export class PaperService extends AbstractService<IPaper> {
  constructor() {
    super();
    let list = [
      {
        id: 'f94c9f99-aff8-4466-88fd-85717c20438c',
        title: 'Modelling the past and future for neural machine translation',
        abs: `Existing neural machine translation systems
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
        abs: `Word embeddings are effective intermediate representations for capturing semantic regularities between words, when learning...`,
        link: 'https://arxiv.org/abs/1805.04174',
        pdf: 'https://arxiv.org/pdf/1805.04174.pdf',
        authors: 8,
        pages: 11
      },
      {
        id: 'ee536e08-0e27-497c-b197-ff1846ff5bea',
        title: 'Modelling the past and future for neural machine translation',
        abs: `Existing neural machine translation systems
        do not explicitly model what has been translated
        and what has not during the decoding
        phase...`,
        link: 'http://aclweb.org/anthology/Q18-1011',
        pdf: 'http://aclweb.org/anthology/Q18-1011',
        authors: 7,
        pages: 4
      },
      {
        id: '2b4ca614-a949-4708-8e00-99cf0ef58b58',
        title: 'Joint Embedding of Words and Labels for Text Classification',
        abs: `Word embeddings are effective intermediate representations for capturing semantic regularities between words, when learning...`,
        link: 'https://arxiv.org/abs/1805.04174',
        pdf: 'https://arxiv.org/pdf/1805.04174.pdf',
        authors: 8,
        pages: 11
      }
    ]
    this.setList(list);
  }
  getKeywords(): Observable<string[]> {
    return of(
      [
        'Embedding',
        'Text classification',
        'semantic regularities',
        'Long Short-Term Memory',
        'semantic-level coverage',
        'look-up keys',
        'neural components'
      ]
    );
  }
  special(): Observable<any[]> {
    return of(
      this.list.slice(0, 2)
    );
  }
  recent(): Observable<any[]> {
    return of(
      this.list.slice(0, 2)
    );
  }
  all(): Observable<any[]> {
    return of(
      this.list
    );
  }
  news():  Observable<any[]>  {
    return of (
      this.list.slice(0, 2)
    );
  }
}
