import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperListComponent } from './paper-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { PaperItemComponent, SearchBoxComponent } from '../../../components';

describe('PaperListComponent', () => {
  let component: PaperListComponent;
  let fixture: ComponentFixture<PaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ PaperListComponent, PaperItemComponent, SearchBoxComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperListComponent);
    component = fixture.componentInstance;
    component.searchModel = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have list of papers', () => {
    expect(component.papers).not.toBeNull();
    expect(component.papers.length).toBeGreaterThan(0);
  });
  it('should have a search model', () => {
    expect(component.searchModel).not.toBeNull();
  });
});
