import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayout } from '@application/pages/main/main.layout';

@NgModule({
	bootstrap: [MainLayout],
	declarations: [MainLayout],
	imports: [BrowserModule],
	providers: []
})
export class AppModule {}
