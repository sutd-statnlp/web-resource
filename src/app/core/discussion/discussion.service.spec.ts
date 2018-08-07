import { TestBed, inject } from '@angular/core/testing';

import { DiscussionService } from "./discussion.service";

describe('DiscussionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussionService]
    });
  });

  it('should be created', inject([DiscussionService], (service: DiscussionService) => {
    expect(service).toBeTruthy();
  }));
  it('should return list of all discussions', inject([DiscussionService], (service: DiscussionService) => {
    let discussions = service.all()
    expect(discussions).not.toBeNull();
    expect(discussions.length).toBeGreaterThan(0);
  }));
  it('should return list of special discussions', inject([DiscussionService], (service: DiscussionService) => {
    let discussions = service.special()
    expect(discussions).not.toBeNull();
    expect(discussions.length).toBeGreaterThan(0);
  }));
  it('should return list of recent discussions', inject([DiscussionService], (service: DiscussionService) => {
    let discussions = service.recent()
    expect(discussions).not.toBeNull();
    expect(discussions.length).toBeGreaterThan(0);
  }));
  it('should return list of titles', inject([DiscussionService], (service: DiscussionService) => {
    let titles = service.getTitles()
    expect(titles).not.toBeNull();
    expect(titles.length).toBeGreaterThan(0);
  }));
  it('should return list of keywords', inject([DiscussionService], (service: DiscussionService) => {
    let keywords = service.getKeywords()
    expect(keywords).not.toBeNull();
    expect(keywords.length).toBeGreaterThan(6);
  }));
});
