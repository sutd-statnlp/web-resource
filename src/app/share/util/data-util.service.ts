import { Injectable } from '@angular/core';
import { IDiscussion, Discussion } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class DataUtilService {
  constructor() { }

  getArrayDataFromSheet(data: any): any[] {
    var array = [];
    var attributes = data.values[0];
    for (var i = 1; i < data.values.length; i++) {
      var item = {};
      var values = data.values[i];
      for (var j = 0; j < values.length; j++) {
        item[attributes[j]] = values[j];
      }
      array.push(item);
    }
    return array;
  }
  convertSheetDataToDiscussions(data: any): IDiscussion[] {
    let items = this.getArrayDataFromSheet(data);
    let discussions: Discussion[] = [];
    items.forEach(item => {
      item.attendees = parseInt(item.attendees);
      item.date = new Date(item.date);
      item.tags = this.convertSheetStringToArray(item.tags);
      item.sections = this.convertSheetStringToArray(item.sections);
      discussions.push(item);
    });
    return discussions;
  }
  convertSheetStringToArray(input: string): string[] {
    return input.split(',,');
  }
  convertSheetDataToStrings(data: any): string[] {
    let result: string[] = [];
    data.values.forEach(item => {
      result = result.concat(item);
    });
    return result;
  }
}
