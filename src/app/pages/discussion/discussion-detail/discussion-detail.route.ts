import { Route } from '@angular/router';

import { DiscussionDetailComponent } from './discussion-detail.component';

export const DISCUSSION_DETAIL_ROUTE: Route = {
    path: 'discussions/:id',
    component: DiscussionDetailComponent,
    data: {
        authorities: [],
        pageTitle: 'Discussion Detail'
    }
};
