import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import {
	NbAlertModule,
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDatepickerModule,
	NbIconModule,
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
		FormsModule,
		HttpClientModule,
		NbAlertModule,
		NbAuthModule,
		NbButtonModule,
		NbCardModule,
		NbCheckboxModule,
		NbDatepickerModule,
		NbEvaIconsModule,
		NbIconModule,
		NbInputModule,
		NbLayoutModule,
		NbMenuModule,
		NbSearchModule,
		NbSelectModule,
		NbSidebarModule,
		Ng2SmartTableModule,
		NgbTypeaheadModule,
		ReactiveFormsModule,
		RouterModule,
		TranslateModule
	]
})
export class GlobalModule {}
