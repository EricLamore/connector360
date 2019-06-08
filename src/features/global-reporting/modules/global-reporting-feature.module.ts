import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryTableClientComponent } from '@features/global-reporting/category/components/category-table-client/category-table-client.component';
import { CategoryTableComponent } from '@features/global-reporting/category/components/category-table/category-table.component';
import { GlobalReportingCategoryPage } from '@features/global-reporting/category/pages/global-reporting-category.page';
import { PerformanceGaugeChartComponent } from '@features/global-reporting/dashboard/components/performance-gauge-chart/performance-gauge-chart.component';
import { SatisfactionDoughnutChartComponent } from '@features/global-reporting/dashboard/components/satisfaction-doughnut-chart/satisfaction-doughnut-chart.component';
import { SignaturesLineChartComponent } from '@features/global-reporting/dashboard/components/signatures-line-chart/signatures-line-chart.component';
import { TicketsBarChartComponent } from '@features/global-reporting/dashboard/components/tickets-bar-chart/tickets-bar-chart.component';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';

import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbProgressBarModule,
	NbSearchModule,
	NbTreeGridModule
} from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingFeatureRoutingModule } from './global-reporting-feature-routing.module';

@NgModule({
	declarations: [
		CategoryTableClientComponent,
		CategoryTableComponent,
		GlobalReportingCategoryPage,
		GlobalReportingDashboardPage,
		PerformanceGaugeChartComponent,
		SatisfactionDoughnutChartComponent,
		SignaturesLineChartComponent,
		SmartTableComponent,
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
