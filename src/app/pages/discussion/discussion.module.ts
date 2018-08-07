import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share';

import { DISCUSSION_DETAIL_ROUTE, DiscussionDetailComponent } from './discussion-detail';
import { DISCUSSION_LIST_ROUTE, DiscussionListComponent, DiscussionListPipe } from './discussion-list';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      DISCUSSION_DETAIL_ROUTE,
      DISCUSSION_LIST_ROUTE
    ])
  ],
  declarations: [
    DiscussionDetailComponent,
    DiscussionListComponent,
    DiscussionListPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DiscussionModule { }
