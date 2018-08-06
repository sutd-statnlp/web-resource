import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaperItemComponent } from './paper-item.component';

describe('PaperItemComponent', () => {
  let component: PaperItemComponent;
  let fixture: ComponentFixture<PaperItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PaperItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperItemComponent);
    component = fixture.componentInstance;
    component.paper = {
      id: '',
      title: '',
      abstract: ``,
      link: '',
      pdf: '',
      authors: 0,
      pages: 0
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a paper', () => {
    expect(component.paper).not.toBeNull();
  });
  it('should have an icon', () => {
    expect(component.icon).not.toBeNull();
  });
});
