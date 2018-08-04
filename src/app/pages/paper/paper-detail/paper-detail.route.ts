import { Route } from '@angular/router';

import { PaperDetailComponent } from './paper-detail.component';

export const PAPER_DETAIL_ROUTE: Route = {
    path: 'papers/:id',
    component: PaperDetailComponent,
    data: {
        authorities: [],
        pageTitle: 'Paper Detail'
    }
};
