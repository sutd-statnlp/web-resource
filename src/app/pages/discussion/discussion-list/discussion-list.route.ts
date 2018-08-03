import { Route } from '@angular/router';

import { DiscussionListComponent } from './discussion-list.component';

export const DISCUSSION_LIST_ROUTE: Route = {
    path: 'discussions',
    component: DiscussionListComponent,
    data: {
        authorities: [],
        pageTitle: 'Discussion List'
    }
};
