import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
	NbButtonModule,
	NbCardModule,
	NbDatepickerModule,
	NbInputModule,
	NbLayoutModule,
	NbMenuModule,
	NbSearchModule,
	NbSelectModule,
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
		NbButtonModule,
		NbCardModule,
		NbDatepickerModule,
		NbInputModule,
		NbLayoutModule,
		NbMenuModule,
		NbSearchModule,
		NbSelectModule,
		NbSidebarModule,
		Ng2SmartTableModule,
		ReactiveFormsModule,
		RouterModule,
		TranslateModule
	]
})
export class GlobalModule {}
