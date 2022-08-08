import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { WithoutsidebarModule } from './layouts/withoutsidebar/withoutsidebar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    WithoutsidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
