import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionListComponent } from './discussion-list.component';
import { FormsModule } from '@angular/forms';


describe('DiscussionListComponent', () => {
  let component: DiscussionListComponent;
  let fixture: ComponentFixture<DiscussionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DiscussionListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should list of discussions', () => {
    expect(component.discussions).not.toBeNull();
    expect(component.discussions.length).toBeGreaterThan(0);
  });
  it('should have search model', () => {
    expect(component.searchModel).not.toBeNull();
    expect(component.searchModel).toEqual('');
  });
  it('startDictation should return true when recognition is not null ', () => {
    expect(component.startDictation()).toBeTruthy();
    component.recognition = null;
    expect(component.startDictation()).toBeFalsy();
  });
  it('handleRecognitionResult should return true and pass it into searchModel', () => {
    const transcript = 'AAAA';
    expect(component.handleRecognitionResult(
      {
        results: [[{
          transcript: transcript
        }]]
      }
    )).toBeTruthy();
    expect(component.searchModel).toEqual(transcript);
  });
  it('handleRecognitionError should return false when have the event', () => {
    expect(component.handleRecognitionError({})).toBeFalsy();
    expect(component.handleRecognitionError(null)).toBeTruthy();
  });
});
