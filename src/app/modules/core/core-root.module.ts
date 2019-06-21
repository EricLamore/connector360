import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbDatepickerModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { CorePublicModule } from './core-public.module';

@NgModule({
	exports: [CorePublicModule],
	imports: [
		BrowserAnimationsModule,
		CorePublicModule,
		HttpClientModule,
		NbDatepickerModule.forRoot(),
		NbMenuModule.forRoot(),
		NbSidebarModule.forRoot(),
		NbThemeModule.forRoot({ name: 'dark' })
	],
	providers: []
})
export class CoreRootModule {}
