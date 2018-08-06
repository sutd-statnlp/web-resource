import { NgModule, CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DiscussionItemComponent, PaperItemComponent, SearchBoxComponent} from '../components';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [DiscussionItemComponent, PaperItemComponent, SearchBoxComponent],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    // Components
    DiscussionItemComponent,
    PaperItemComponent,
    SearchBoxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShareModule { }
