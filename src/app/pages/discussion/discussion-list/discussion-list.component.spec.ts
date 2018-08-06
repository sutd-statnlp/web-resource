import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionListComponent } from './discussion-list.component';

describe('DiscussionListComponent', () => {
  let component: DiscussionListComponent;
  let fixture: ComponentFixture<DiscussionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionListComponent ]
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
  it('startDictation should return true', () => {
    expect(component.startDictation()).toBeTruthy();
    component.recognition = null;
    expect(component.startDictation()).toBeFalsy();
  });
});
