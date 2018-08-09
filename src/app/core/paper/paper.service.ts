import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract.service';
import { Observable } from 'rxjs';
import { IPaper } from './paper.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { DataUtilService } from '../../share';
import { API_PAPER_ALL_URL, API_PAPER_RECENT_URL, API_PAPER_SPECIAL_URL, API_PAPER_KEYWORD_URL, API_PAPER_NEW_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PaperService extends AbstractService<IPaper> {
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
    return this.http.get<string[]>(API_PAPER_KEYWORD_URL).
    pipe(
      map(item => {
        return this.dataUtilService.convertSheetDataToStrings(item);
      }),
      catchError(this.handleError('get all papers', []))
    );
  }
  special(): Observable<IPaper[]> {
    return this.http.get<IPaper[]>(API_PAPER_SPECIAL_URL).
    pipe(
      map(item => {
        return this.dataUtilService.convertSheetDataToPapers(item);
      }),
      catchError(this.handleError('get special papers', []))
    );
  }
  recent(): Observable<IPaper[]> {
    return this.http.get<IPaper[]>(API_PAPER_RECENT_URL).
    pipe(
      map(item => {
        return this.dataUtilService.convertSheetDataToPapers(item);
      }),
      catchError(this.handleError('get recent papers', []))
    );
  }
  all(): Observable<IPaper[]> {
    return this.http.get<IPaper[]>(API_PAPER_ALL_URL).
      pipe(
        map(item => {
          return this.dataUtilService.convertSheetDataToPapers(item);;
        }),
        catchError(this.handleError('get all papers', []))
      );
  }
  news():  Observable<any[]>  {
    return this.http.get<IPaper[]>(API_PAPER_NEW_URL).
      pipe(
        map(item => {
          return this.dataUtilService.convertSheetDataToPapers(item);;
        }),
        catchError(this.handleError('get new papers', []))
      );
  }
}
