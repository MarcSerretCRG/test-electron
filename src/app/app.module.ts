import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarMainComponent } from './sidebar/sidebar-main/sidebar-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
