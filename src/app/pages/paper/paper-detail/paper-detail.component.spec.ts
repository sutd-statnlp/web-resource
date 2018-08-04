import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PaperDetailComponent } from './paper-detail.component';

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
    }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperDetailComponent ],
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
  it('should have id', () => {
    expect(component.id).not.toBeNull();
    expect(component.id).toEqual(DEFAULT_ID);
  });
  it('should a paper', () => {
    expect(component.paper).not.toBeNull();
  });
});
