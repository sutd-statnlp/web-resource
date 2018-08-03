import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DiscussionDetailComponent } from './discussion-detail.component';

describe('DiscussionDetailComponent', () => {
  let component: DiscussionDetailComponent;
  let fixture: ComponentFixture<DiscussionDetailComponent>;
  const DEFAULT_ID: string = 'AAAAAA'
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
      declarations: [DiscussionDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a dicussion', () => {
    expect(component.id).not.toBeNull();
    expect(component.id).toEqual(DEFAULT_ID);
    expect(component.discussion).not.toBeNull();
  });
});
