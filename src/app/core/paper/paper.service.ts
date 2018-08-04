import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor() { }

  special(): any {
    return [
      {
        title: 'Modelling the past and future for neural machine translation',
        abstract: `Existing neural machine translation systems
        do not explicitly model what has been translated
        and what has not during the decoding
        phase. To address this problem, we propose
        a novel mechanism that separates the source
        information into two parts: translated PAST
        contents and untranslated FUTURE contents,
        which are modeled by two additional recurrent
        layers. The PAST and FUTURE contents
        are fed to both the attention model and the decoder
        states, which provides Neural Machine
        Translation (NMT) systems with the knowledge
        of translated and untranslated contents.
        Experimental results show that the proposed
        approach significantly improves the performance
        in Chinese-English, German-English,
        and English-German translation tasks. Specifically,
        the proposed model outperforms the
        conventional coverage model in terms of both
        the translation quality and the alignment error
        rate.`,
        link: 'http://aclweb.org/anthology/Q18-1011'
      },
      {
        title: 'Joint Embedding of Words and Labels for Text Classification',
        abstract: `Word embeddings are effective intermediate representations for capturing semantic regularities between words, when learning the representations of text sequences. We propose to view text classification as a label-word joint embedding problem: each label is embedded in the same space with the word vectors. We introduce an attention framework that measures the compatibility of embeddings between text sequences and labels. The attention is learned on a training set of labeled samples to ensure that, given a text sequence, the relevant words are weighted higher than the irrelevant ones. Our method maintains the interpretability of word embeddings, and enjoys a built-in ability to leverage alternative sources of information, in addition to input text sequences. Extensive results on the several large text datasets show that the proposed framework outperforms the state-of-the-art methods by a large margin, in terms of both accuracy and speed.`,
        link: 'https://arxiv.org/abs/1805.04174'
      }
    ]
  }
  recent(): any {
    return [
      {
        title: 'Modelling the past and future for neural machine translation',
        abstract: `Existing neural machine translation systems
        do not explicitly model what has been translated
        and what has not during the decoding
        phase...`,
        link: 'http://aclweb.org/anthology/Q18-1011'
      },
      {
        title: 'Joint Embedding of Words and Labels for Text Classification',
        abstract: `Word embeddings are effective intermediate representations for capturing semantic regularities between words, when learning the representations of text sequences...`,
        link: 'https://arxiv.org/abs/1805.04174'
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
