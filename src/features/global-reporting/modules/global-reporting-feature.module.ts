import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BillsTableClientComponent } from '@features/global-reporting/bills/components/bills-table-client/bills-table-client.component';
import { BillsTableComponent } from '@features/global-reporting/bills/components/bills-table/bills-table.component';
import { GlobalReportingBillsPage } from '@features/global-reporting/bills/pages/global-reporting-bills.page';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { ProjectsTableClientComponent } from '@features/global-reporting/projects/components/projects-table-client/projects-table-client.component';
import { ProjectsTableComponent } from '@features/global-reporting/projects/components/projects-table/projects-table.component';
import { GlobalReportingProjectsPage } from '@features/global-reporting/projects/pages/global-reporting-projects.page';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbCardModule, NbLayoutModule, NbProgressBarModule, NbSearchModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingFeatureRoutingModule } from './global-reporting-feature-routing.module';

@NgModule({
	declarations: [
		BillsTableClientComponent,
		BillsTableComponent,
		GlobalReportingBillsPage,
		GlobalReportingDashboardPage,
		GlobalReportingProjectsPage,
		ProjectsTableClientComponent,
		ProjectsTableComponent,
		SmartTableComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		GlobalReportingFeatureRoutingModule,
		NbCardModule,
		NbLayoutModule,
		NbSearchModule,
		NbProgressBarModule,
		NbTreeGridModule,
		Ng2SmartTableModule
	],
	providers: [DatePipe]
})
export class GlobalReportingFeatureModule {}
