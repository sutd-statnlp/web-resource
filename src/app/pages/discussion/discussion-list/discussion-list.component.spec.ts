import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscussionListComponent } from './discussion-list.component';
import { DiscussionItemComponent, SearchBoxComponent } from '../../../components';
import { FakeShareModule } from '~/../test';

describe('DiscussionListComponent', () => {
  let component: DiscussionListComponent;
  let fixture: ComponentFixture<DiscussionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [DiscussionListComponent, DiscussionItemComponent, SearchBoxComponent]
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
  it('should have searchText', () => {
    expect(component.searchText).not.toBeNull();
    expect(component.searchText).toEqual('');
  });
  it('searchModelEvent should set searchText', () => {
    const text = 'AAAA';
    component.searchModelEvent(text);
    expect(component.searchText).toEqual(text);
  });
  it('should list of discussion titles', () => {
    expect(component.discussionTitles).not.toBeNull();
    expect(component.discussionTitles.length).toBeGreaterThan(0);
  });
});
