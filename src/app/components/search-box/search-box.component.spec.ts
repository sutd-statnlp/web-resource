import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import { FakeShareModule } from '~/../test';
import { Observable } from 'rxjs';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [ SearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    component.searchModel = '';
    component.placeholder = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a searchModel', () => {
    expect(component.searchModel).not.toBeNull();
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
  it('should have a placeholder', () => {
    expect(component.placeholder).not.toBeNull();
  });
  it('should have a searchTypeAhead', () => {
    expect(component.searchTypeAhead(new Observable<string>())).not.toBeNull();
  });
});
