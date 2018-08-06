import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterTestingModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterTestingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FakeShareModule { }
