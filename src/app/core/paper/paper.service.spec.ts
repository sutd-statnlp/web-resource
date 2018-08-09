import { TestBed, inject } from '@angular/core/testing';

import { PaperService } from './paper.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PaperService', () => {
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
      imports: [HttpClientTestingModule],
      providers: [PaperService]
    });
  });

  it('should be created', inject([PaperService], (service: PaperService) => {
    expect(service).toBeTruthy();
  }));
  it('should return list of all papers', inject([PaperService], (service: PaperService) => {
    service.all().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of special papers', inject([PaperService], (service: PaperService) => {
    service.special().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of recent papers', inject([PaperService], (service: PaperService) => {
    service.recent().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of new papers', inject([PaperService], (service: PaperService) => {
    service.news().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(0);
    })
  }));
  it('should return list of keywords', inject([PaperService], (service: PaperService) => {
    service.getKeywords().subscribe(items => {
      expect(items).not.toBeNull();
      expect(items.length).toBeGreaterThan(6);
    })
  }));
  it('loadMap should return a map', inject([PaperService], (service: PaperService) => {
    let map = service.loadMap(list);
    expect(map).not.toBeNull();
    expect(map.size).toBeGreaterThan(0);
  }));
  it('setList should set internal list', inject([PaperService], (service: PaperService) => {
    expect(service.setList(list)).toBeTruthy();
  }));
  it('getIdByOffset should return an id', inject([PaperService], (service: PaperService) => {
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
  it('getIndex should return an index', inject([PaperService], (service: PaperService) => {
    expect(service.setList(list)).toBeTruthy();
    let index = service.getIndex(DEFAULT_ID);
    expect(index).not.toBeNull();
    expect(index).toBeGreaterThanOrEqual(0);
  }));
  it('get should return a paper', inject([PaperService], (service: PaperService) => {
    expect(service.setList(list)).toBeTruthy();
    let paper = service.get(DEFAULT_ID);
    expect(paper).not.toBeNull();

    paper = service.get('KAKA');
    expect(paper).toBeNull();
  }));
  it('getNextID should return an id', inject([PaperService], (service: PaperService) => {
    expect(service.setList(list)).toBeTruthy();
    let id = service.getNextID(DEFAULT_ID);
    expect(id).not.toBeNull();

    id = service.getNextID(SECOND_ID);
    expect(id).toBeNull();

    id = service.getNextID('KAKA');
    expect(id).toBeNull();
  }));
  it('getPreviousID should return an id', inject([PaperService], (service: PaperService) => {
    expect(service.setList(list)).toBeTruthy();
    let id = service.getPreviousID(SECOND_ID);
    expect(id).not.toBeNull();

    id = service.getPreviousID(DEFAULT_ID);
    expect(id).toBeNull();

    id = service.getPreviousID('KAKA');
    expect(id).toBeNull();
  }));
});
