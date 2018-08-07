import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share';
import { PaperListComponent, PAPER_LIST_ROUTE, PaperListPipe } from './paper-list';
import { PaperDetailComponent, PAPER_DETAIL_ROUTE } from './paper-detail';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      PAPER_LIST_ROUTE,
      PAPER_DETAIL_ROUTE
    ])
  ],
  declarations: [
    PaperDetailComponent,
    PaperListComponent,
    PaperListPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaperModule { }
