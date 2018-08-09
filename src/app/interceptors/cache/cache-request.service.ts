import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { CACHE_MAX_AGE } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CacheRequestService {

  private cache: Map<any, any>;

  constructor() {
    this.cache = new Map();
  }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);
    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - CACHE_MAX_AGE);
    if (isExpired) {
      return undefined;
    }
    return cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): boolean {
    const url = req.url;
    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    const expired = Date.now() - CACHE_MAX_AGE;
    this.cache.forEach(expiredEntry => {
      if (expiredEntry.lastRead < expired) {
        this.cache.delete(expiredEntry.url);
      }
    });
    return this.cache.size > 0;
  }
}
