import { TestBed, inject } from '@angular/core/testing';

import { DiscussionService } from "./discussion.service";

describe('DiscussionService', () => {
  const DEFAULT_ID = 'AAAA';
  const SECOND_ID = 'BBBB';
  let list = [
    {
      id: DEFAULT_ID
    },
    {
      id: SECOND_ID
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussionService]
    });
  });

  it('should be created', inject([DiscussionService], (service: DiscussionService) => {
    expect(service).toBeTruthy();
  }));
  it('should return list of all discussions', inject([DiscussionService], (service: DiscussionService) => {
    service.all().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of special discussions', inject([DiscussionService], (service: DiscussionService) => {
    service.special().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of recent discussions', inject([DiscussionService], (service: DiscussionService) => {
    service.recent().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of keywords', inject([DiscussionService], (service: DiscussionService) => {
    service.getKeywords().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(6);
    })
  }));
  it('loadMap should return a map', inject([DiscussionService], (service: DiscussionService) => {
    let map = service.loadMap(list);
    expect(map).not.toBeNull();
    expect(map.size).toBeGreaterThan(0);
  }));
  it('setList should set internal list', inject([DiscussionService], (service: DiscussionService) => {
    expect(service.setList(list)).toBeTruthy();
  }));
  it('getIndex should return an index', inject([DiscussionService], (service: DiscussionService) => {
    expect(service.setList(list)).toBeTruthy();
    let index = service.getIndex(DEFAULT_ID);
    expect(index).not.toBeNull();
    expect(index).toBeGreaterThanOrEqual(0);
  }));
  it('get should return a discussion', inject([DiscussionService], (service: DiscussionService) => {
    expect(service.setList(list)).toBeTruthy();
    let discussion = service.get(DEFAULT_ID);
    expect(discussion).not.toBeNull();

    discussion = service.get('KAKA');
    expect(discussion).toBeNull();
  }));
  it('getIdByOffset should return an id', inject([DiscussionService], (service: DiscussionService) => {
    expect(service.setList(list)).toBeTruthy();
    let id = service.getOffsetID(DEFAULT_ID, 1);
    expect(id).not.toBeNull();

    id = service.getOffsetID(SECOND_ID, -1);
    expect(id).not.toBeNull();

    id = service.getOffsetID(SECOND_ID, 2);
    expect(id).toBeNull();

    id = service.getOffsetID('KAKA', 1);
    expect(id).toBeNull();
  }));
  it('getNextID should return an id', inject([DiscussionService], (service: DiscussionService) => {
    expect(service.setList(list)).toBeTruthy();
    let id = service.getNextID(DEFAULT_ID);
    expect(id).not.toBeNull();

    id = service.getNextID(SECOND_ID);
    expect(id).toBeNull();

    id = service.getNextID('KAKA');
    expect(id).toBeNull();
  }));
  it('getPreviousID should return an id', inject([DiscussionService], (service: DiscussionService) => {
    expect(service.setList(list)).toBeTruthy();
    let id = service.getPreviousID(SECOND_ID);
    expect(id).not.toBeNull();

    id = service.getPreviousID(DEFAULT_ID);
    expect(id).toBeNull();

    id = service.getPreviousID('KAKA');
    expect(id).toBeNull();
  }));
});
