import { TestBed, inject } from '@angular/core/testing';

import { CacheRequestService } from './cache-request.service';
import { HttpRequest, HttpResponse } from '@angular/common/http';

describe('CacheRequestService', () => {
  let request = new HttpRequest('GET','AAAA');
  let response = new HttpResponse();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheRequestService]
    });
  });

  it('should be created', inject([CacheRequestService], (service: CacheRequestService) => {
    expect(service).toBeTruthy();
  }));

  it('put should return true', inject([CacheRequestService], (service: CacheRequestService) => {
    expect(service.put(request,response)).toBeTruthy();
  }));

  it('get should return response', inject([CacheRequestService], (service: CacheRequestService) => {
    expect(service.put(request,response)).toBeTruthy();
    expect(service.get(request)).not.toBeNull();

    expect(service.get(new HttpRequest('GET','BBBB'))).toBeUndefined();
  }));
});
