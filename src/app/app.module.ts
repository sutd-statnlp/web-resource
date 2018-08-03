import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app.router.module';
import { ShareModule } from './share';
import { HomeModule, DiscussionModule } from './pages';

import { MainComponent, FooterComponent, NavbarComponent } from './layouts';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ShareModule,
    /* Pages Modules */
    HomeModule,
    DiscussionModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
