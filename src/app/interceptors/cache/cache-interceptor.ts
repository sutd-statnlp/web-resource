import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { of, Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { CacheRequestService } from './cache-request.service';

export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: CacheRequestService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    return cachedResponse ?
      of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }
  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: CacheRequestService): Observable<HttpEvent<any>> {

    const noHeaderReq = req.clone({ headers: new HttpHeaders() });

    return next.handle(noHeaderReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cache.put(req, event);
        }
      })
    );
  }
}
