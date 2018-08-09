import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRouterModule } from './app-routing.module';
import { ShareModule } from './share';
import { HomeModule, DiscussionModule, PaperModule } from './pages';

import { MainComponent, FooterComponent, NavbarComponent, ShareSectionComponent } from './layouts';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CacheInterceptor } from './interceptors/cache/cache-interceptor';
import { CacheRequestService } from './interceptors/cache/cache-request.service';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ShareSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ShareModule,
    NgHttpLoaderModule,
    /* Pages Modules */
    HomeModule,
    DiscussionModule,
    PaperModule
  ],
  bootstrap: [MainComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
      deps: [CacheRequestService, Injector]
    }
  ]
})
export class AppModule { }
