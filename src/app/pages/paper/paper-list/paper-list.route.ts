import { Route } from '@angular/router';

import { PaperListComponent } from './paper-list.component';

export const PAPER_LIST_ROUTE: Route = {
  path: 'papers',
  component: PaperListComponent,
  data: {
    authorities: [],
    pageTitle: 'Paper List'
  }
};
