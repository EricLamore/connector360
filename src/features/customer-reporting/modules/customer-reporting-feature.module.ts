import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerReportingDashboardPage } from '@features/customer-reporting/dashboard/pages/customer-reporting-dashboard.page';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';

import { NbCardModule } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomerReportingFeatureRoutingModule } from './customer-reporting-feature-routing.module';

@NgModule({
	declarations: [CustomerReportingDashboardPage, SmartTableComponent],
	imports: [
		ChartsModule,
		CommonModule,
		FlexLayoutModule,
		CustomerReportingFeatureRoutingModule,
		NbCardModule,
		Ng2SmartTableModule
	],
	providers: [DatePipe]
})
export class CustomerReportingFeatureModule {}
