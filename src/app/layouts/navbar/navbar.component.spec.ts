import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeShareModule } from 'test';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have list of special papers', () => {
    expect(component.specialPapers).not.toBeNull();
  });
  it('should have list of special discussions', () => {
    expect(component.specialDiscussions).not.toBeNull();
  });
});
