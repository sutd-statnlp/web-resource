import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ShareSectionComponent } from '../share-section/share-section.component';
import { FakeShareModule } from 'test';
import { NgHttpLoaderModule } from 'ng-http-loader';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgHttpLoaderModule, FakeShareModule],
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
