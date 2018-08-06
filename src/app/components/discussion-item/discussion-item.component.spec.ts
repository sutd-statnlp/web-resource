import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DiscussionItemComponent } from './discussion-item.component';

describe('DiscussionItemComponent', () => {
  let component: DiscussionItemComponent;
  let fixture: ComponentFixture<DiscussionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DiscussionItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionItemComponent);
    component = fixture.componentInstance;
    component.discussion = {
      id: '',
      title: '',
      sub: ``,
      date: new Date(),
      tags: [],
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a discussion', () => {
    expect(component.discussion).not.toBeNull();
  });
});
