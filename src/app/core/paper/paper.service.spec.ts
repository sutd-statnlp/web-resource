import { TestBed, inject } from '@angular/core/testing';

import { PaperService } from './paper.service';

describe('PaperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaperService]
    });
  });

  it('should be created', inject([PaperService], (service: PaperService) => {
    expect(service).toBeTruthy();
  }));
  it('should return list of all papers', inject([PaperService], (service: PaperService) => {
    let papers = service.all()
    expect(papers).not.toBeNull();
    expect(papers.length).toBeGreaterThan(0);
  }));
  it('should return list of special papers', inject([PaperService], (service: PaperService) => {
    let papers = service.special()
    expect(papers).not.toBeNull();
    expect(papers.length).toBeGreaterThan(0);
  }));
  it('should return list of recent papers', inject([PaperService], (service: PaperService) => {
    let papers = service.recent()
    expect(papers).not.toBeNull();
    expect(papers.length).toBeGreaterThan(0);
  }));
  it('should return a paper with id', inject([PaperService], (service: PaperService) => {
    expect(service.get('AAAA')).not.toBeNull();
  }));
  it('should return list of new papers', inject([PaperService], (service: PaperService) => {
    let papers = service.news()
    expect(papers).not.toBeNull();
    expect(papers.length).toBeGreaterThan(0);
  }));
  it('should return list of keywords', inject([PaperService], (service: PaperService) => {
    let keywords = service.getKeywords()
    expect(keywords).not.toBeNull();
    expect(keywords.length).toBeGreaterThan(6);
  }));
});
