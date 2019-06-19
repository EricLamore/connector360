import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbSearchModule,
	NbSidebarModule,
	NbSidebarService,
	NbThemeModule
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
	exports: [
		ChartsModule,
		CommonModule,
		FlexLayoutModule,
		HttpClientModule,
		NbCardModule,
		NbLayoutModule,
		NbMenuModule,
		NbSearchModule,
		NbSidebarModule,
		Ng2SmartTableModule,
		RouterModule,
		TranslateModule
	]
})
export class GlobalModule {}
