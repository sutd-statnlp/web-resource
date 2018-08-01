import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var $: any;
$(document).ready(function() { $('body').bootstrapMaterialDesign(); });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
