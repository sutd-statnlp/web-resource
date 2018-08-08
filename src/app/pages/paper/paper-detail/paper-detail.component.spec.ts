import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PaperDetailComponent } from './paper-detail.component';
import { FakeShareModule } from 'test';

describe('PaperDetailComponent', () => {
  let component: PaperDetailComponent;
  let fixture: ComponentFixture<PaperDetailComponent>;
  const DEFAULT_ID: string = 'AAAAAA';
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (id: string) => {
          return DEFAULT_ID;
        }
      }
    },
    params: {
      subscribe: () => { }
    }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [PaperDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have id and a paper', () => {
    expect(component.id).not.toBeNull();
    expect(component.id).toEqual(DEFAULT_ID);
    expect(component.paper).toBeNull();
  });
  it('should have null nextId', () => {
    expect(component.nextId).toBeNull();
  });
  it('should have null previousId', () => {
    expect(component.previousId).toBeNull();
  });
  it('sanitizeUrl should return safe url', () => {
    expect(component.sanitizeResourceUrl('https://arxiv.org/abs/1805.04174'))
      .not.toBeNull();
  });
});
