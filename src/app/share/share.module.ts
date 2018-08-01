import { NgModule, CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';
import { CovalentCommonModule } from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    /** Material Modules */
    MatButtonModule,
    CovalentCommonModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    /** Material Modules */
    MatButtonModule,
    CovalentCommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule { }
