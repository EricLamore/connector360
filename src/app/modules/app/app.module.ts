import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlankLayout } from '@application/pages/layouts/blank/blank.layout';
import { CoreRootModule } from '../core/core-root.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	bootstrap: [BlankLayout],
	imports: [AppRoutingModule, BrowserModule, CoreRootModule]
})
export class AppModule {}
