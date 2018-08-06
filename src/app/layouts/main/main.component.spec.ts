import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRouterModule } from '../../app-routing.module';

import { MainComponent } from './main.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ShareSectionComponent } from '../share-section/share-section.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRouterModule],
      declarations: [
        MainComponent,
        NavbarComponent,
        FooterComponent,
        ShareSectionComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
