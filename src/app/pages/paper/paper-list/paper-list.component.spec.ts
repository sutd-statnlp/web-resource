import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperListComponent } from './paper-list.component';
import { FakeShareModule } from '~/../test';
import { PaperItemComponent, SearchBoxComponent } from '../../../components';

describe('PaperListComponent', () => {
  let component: PaperListComponent;
  let fixture: ComponentFixture<PaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FakeShareModule],
      declarations: [ PaperListComponent, PaperItemComponent, SearchBoxComponent]
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
  it('should have a search text', () => {
    expect(component.searchText).not.toBeNull();
  });
  it('should have a searchModelEvent', () => {
    const text = 'AAAA';
    component.searchModelEvent(text);
    expect(component.searchText).toEqual(text);
  });
  it('should have list of paper keywords', () => {
    expect(component.paperKeywords).not.toBeNull();
    expect(component.paperKeywords.length).toBeGreaterThan(0);
  });
});
