import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BillsTableClientComponent } from '@features/global-reporting/bills/components/bills-table-client/bills-table-client.component';
import { BillsTableComponent } from '@features/global-reporting/bills/components/bills-table/bills-table.component';
import { GlobalReportingBillsPage } from '@features/global-reporting/bills/pages/global-reporting-bills.page';
import { BillsSimpleTableComponent } from '@features/global-reporting/dashboard/components/bills-table.component';
import { BusinessSituationComponent } from '@features/global-reporting/dashboard/components/business-situation.component';
import { MRRComponent } from '@features/global-reporting/dashboard/components/mrr.component';
import { PerformanceGaugeChartComponent } from '@features/global-reporting/dashboard/components/performance-gauge-chart.component';
import { ProjectsSimpleTableComponent } from '@features/global-reporting/dashboard/components/projects-table.component';
import { SatisfactionDoughnutChartComponent } from '@features/global-reporting/dashboard/components/satisfaction-doughnut-chart.component';
import { SignatureLineChartComponent } from '@features/global-reporting/dashboard/components/signature-line-chart.component';
import { SynthesisProjectsComponent } from '@features/global-reporting/dashboard/components/synthesis-projects.component';
import { TicketsBarChartComponent } from '@features/global-reporting/dashboard/components/tickets-bar-chart.component';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { SimpleTableComponent } from '@features/global-reporting/simple-table/components/simple-table.component';
import { ProjectsTableClientComponent } from '@features/global-reporting/projects/components/projects-table-client/projects-table-client.component';
import { ProjectsTableComponent } from '@features/global-reporting/projects/components/projects-table/projects-table.component';
import { GlobalReportingProjectsPage } from '@features/global-reporting/projects/pages/global-reporting-projects.page';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbProgressBarModule,
	NbSearchModule,
	NbSidebarModule,
	NbTreeGridModule
} from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingFeatureRoutingModule } from './global-reporting-feature-routing.module';

@NgModule({
	declarations: [
		BillsTableComponent,
		GlobalReportingBillsPage,
		GlobalReportingDashboardPage,
		SimpleTableComponent,
		SmartTableComponent,
		SignatureLineChartComponent,
		SatisfactionDoughnutChartComponent,
		BusinessSituationComponent,
		MRRComponent,
		SynthesisProjectsComponent,
		BillsSimpleTableComponent,
		ProjectsSimpleTableComponent,
		TicketsBarChartComponent,
		PerformanceGaugeChartComponent,
		BillsTableClientComponent,
		GlobalReportingProjectsPage,
		ProjectsTableClientComponent,
		ProjectsTableComponent
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
		Ng2SmartTableModule,
		ChartsModule
	],
	providers: [DatePipe]
})
export class GlobalReportingFeatureModule {}
