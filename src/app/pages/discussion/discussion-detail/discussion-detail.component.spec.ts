import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FakeShareModule } from 'test';
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
    },
    params: {
      subscribe: () => {}
    }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
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
  it('should have id and a dicussion', () => {
    expect(component.id).not.toBeNull();
    expect(component.id).toEqual(DEFAULT_ID);
    expect(component.discussion).toBeNull();
  });
  it('should have null nextId', () => {
    expect(component.nextId).toBeNull();
  });
  it('should have null previousId', () => {
    expect(component.previousId).toBeNull();
  });
});
