import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainLayout } from '@application/pages/main/main.layout';

@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainLayout]
})
export class AppModule { }
