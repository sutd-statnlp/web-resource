import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract.service';
import { Observable } from 'rxjs';
import { IDiscussion } from './discussion.model';
import { HttpClient } from '@angular/common/http';
import { API_DISCUSSION_ALL_URL, API_DISCUSSION_RECENT_URL, API_DISCUSSION_SPECIAL_URL, API_DISCUSSION_KEYWORD_URL } from 'src/app/app.constants';
import { catchError, map } from 'rxjs/operators';
import { DataUtilService } from 'src/app/share';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService extends AbstractService<IDiscussion> {
  constructor(
    private http: HttpClient,
    private dataUtilService: DataUtilService
  ) {
    super();
    this.all().subscribe(items => {
      this.setList(items);
    })
  }
  getKeywords(): Observable<string[]> {
    return this.http.get<string[]>(API_DISCUSSION_KEYWORD_URL).
    pipe(
      map(item => {
        return this.dataUtilService.convertSheetDataToStrings(item);
      }),
      catchError(this.handleError('get all discussions', []))
    );
  }
  special(): Observable<IDiscussion[]> {
    return this.http.get<IDiscussion[]>(API_DISCUSSION_SPECIAL_URL).
    pipe(
      map(item => {
        return this.dataUtilService.convertSheetDataToDiscussions(item);
      }),
      catchError(this.handleError('get special discussions', []))
    );
  }
  recent(): Observable<IDiscussion[]> {
    return this.http.get<IDiscussion[]>(API_DISCUSSION_RECENT_URL).
    pipe(
      map(item => {
        return this.dataUtilService.convertSheetDataToDiscussions(item);
      }),
      catchError(this.handleError('get recent discussions', []))
    );
  }
  all(): Observable<IDiscussion[]> {
    return this.http.get<IDiscussion[]>(API_DISCUSSION_ALL_URL).
      pipe(
        map(item => {
          return this.dataUtilService.convertSheetDataToDiscussions(item);;
        }),
        catchError(this.handleError('get all discussions', []))
      );
  }
}
