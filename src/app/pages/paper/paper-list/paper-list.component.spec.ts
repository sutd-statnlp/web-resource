import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperListComponent } from './paper-list.component';

describe('PaperListComponent', () => {
  let component: PaperListComponent;
  let fixture: ComponentFixture<PaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have list of papers', () => {
    expect(component.papers).not.toBeNull();
    expect(component.papers.length).toBeGreaterThan(0);
  });
});
