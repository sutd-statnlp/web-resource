import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeShareModule } from 'test';

import { DiscussionItemComponent, PaperItemComponent } from '../../components';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [HomeComponent, DiscussionItemComponent, PaperItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have list of recent discussions', () => {
    expect(component.recentDiscussions).not.toBeNull();
  });
  it('should have list of recent papers', () => {
    expect(component.recentPapers).not.toBeNull();
  });
  it('should have list of new papers', () => {
    expect(component.newPapers).not.toBeNull();
  });
});
