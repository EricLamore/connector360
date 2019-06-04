import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BillsTableComponent } from '@features/global-reporting/bills/components/bills-table.component';
import { GlobalReportingBillsPage } from '@features/global-reporting/bills/pages/global-reporting-bills.page';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbProgressBarModule,
	NbSidebarModule,
	NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingFeatureRoutingModule } from './global-reporting-feature-routing.module';

@NgModule({
	declarations: [BillsTableComponent, GlobalReportingBillsPage, GlobalReportingDashboardPage, SmartTableComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		GlobalReportingFeatureRoutingModule,
		NbCardModule,
		NbLayoutModule,
		NbMenuModule,
		NbSidebarModule,
		NbProgressBarModule,
		NbTreeGridModule,
		Ng2SmartTableModule
	]
})
export class GlobalReportingFeatureModule {}
