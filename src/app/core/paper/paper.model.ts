import { IModel } from '../mode.interace';

export interface IPaper extends IModel {
  title?: string;
  abs?: string;
  link?: string;
  pdf?: string;
  authors?: number;
  pages?: number;
}

export class Paper implements IPaper {
  constructor(
      public id?: string,
      public title?: string,
      public abs?: string,
      public link?: string,
      public pdf?: string,
      public authors?: number,
      public pages?: number
  ) {}
}
