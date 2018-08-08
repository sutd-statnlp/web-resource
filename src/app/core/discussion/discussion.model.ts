import { IModel } from '../model.interace';

export interface IDiscussion extends IModel {
  title?: string;
  sub?: string;
  date?: Date;
  attendees?: number,
  tags?: string[];
  sections?: string[];
  nextMeeting?: string;
}

export class Discussion implements IDiscussion {
  constructor(
    public id?: string,
    public title?: string,
    public sub?: string,
    public date?: Date,
    public attendees?: number,
    public tags?: string[],
    public sections?: string[],
    public nextMeeting?: string
  ) { }
}
