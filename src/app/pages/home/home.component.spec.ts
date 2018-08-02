import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
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
    expect(component.recentDiscussions.length).toBeGreaterThan(0);
  });
  it('should have list of recent papers', () => {
    expect(component.recentPapers).not.toBeNull();
    expect(component.recentPapers.length).toBeGreaterThan(0);
  });
});
