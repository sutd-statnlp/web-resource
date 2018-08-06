import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share';

import { HomeComponent } from './home.component';
import { HOME_ROUTE } from './home.route';

import { DiscussionItemComponent, PaperItemComponent } from '../../components';


@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([HOME_ROUTE])
  ],
  declarations: [HomeComponent, DiscussionItemComponent, PaperItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
