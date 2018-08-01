import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DEBUG_INFO_ENABLED } from './app.constants';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [],
      { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
