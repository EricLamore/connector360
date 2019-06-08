import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryTableClientComponent } from '@features/global-reporting/category/components/category-table-client/category-table-client.component';
import { CategoryTableComponent } from '@features/global-reporting/category/components/category-table/category-table.component';
import { GlobalReportingCategoryPage } from '@features/global-reporting/category/pages/global-reporting-category.page';
import { BillsSimpleTableComponent } from '@features/global-reporting/dashboard/components/bills-table/bills-table.component';
import { BusinessSituationComponent } from '@features/global-reporting/dashboard/components/business-situation-table/business-situation-table.component';
import { MRRComponent } from '@features/global-reporting/dashboard/components/mrr-table/mrr-table.component';
import { PerformanceGaugeChartComponent } from '@features/global-reporting/dashboard/components/performance-gauge-chart.component';
import { ProjectsSimpleTableComponent } from '@features/global-reporting/dashboard/components/projects-table/projects-table.component';
import { SatisfactionDoughnutChartComponent } from '@features/global-reporting/dashboard/components/satisfaction-doughnut-chart.component';
import { SignatureLineChartComponent } from '@features/global-reporting/dashboard/components/signature-line-chart.component';
import { SynthesisProjectsComponent } from '@features/global-reporting/dashboard/components/synthesis-projects-table/synthesis-projects-table.component';
import { TicketsBarChartComponent } from '@features/global-reporting/dashboard/components/tickets-bar-chart.component';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
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
		BillsSimpleTableComponent,
		BusinessSituationComponent,
		CategoryTableClientComponent,
		CategoryTableComponent,
		GlobalReportingCategoryPage,
		GlobalReportingDashboardPage,
		MRRComponent,
		PerformanceGaugeChartComponent,
		ProjectsSimpleTableComponent,
		SatisfactionDoughnutChartComponent,
		SignatureLineChartComponent,
		SmartTableComponent,
		SynthesisProjectsComponent,
		TicketsBarChartComponent
	],
	imports: [
		ChartsModule,
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
