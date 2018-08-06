import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share';

import { HomeComponent } from './home.component';
import { HOME_ROUTE } from './home.route';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([HOME_ROUTE])
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
