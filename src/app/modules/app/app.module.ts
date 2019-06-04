import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankLayout, MainLayout } from '@application/pages';
import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbSidebarModule,
	NbSidebarService,
	NbThemeModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	bootstrap: [BlankLayout],
	declarations: [BlankLayout, MainLayout],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		NbCardModule,
		NbLayoutModule,
		NbMenuModule,
		NbMenuModule.forRoot(),
		NbSidebarModule,
		NbSidebarModule.forRoot(),
		NbThemeModule.forRoot({ name: 'corporate' })
	],
	providers: [NbSidebarService]
})
export class AppModule {}
