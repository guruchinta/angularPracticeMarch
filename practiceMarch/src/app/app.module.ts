import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Head1Component } from './head1/head1.component';
import { Head2Component } from './head2/head2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Head1Component,
    Head2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
