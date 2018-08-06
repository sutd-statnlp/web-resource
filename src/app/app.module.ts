import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app-routing.module';
import { ShareModule } from './share';
import { HomeModule, DiscussionModule, PaperModule } from './pages';

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
    DiscussionModule,
    PaperModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
