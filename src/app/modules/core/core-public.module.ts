import { NgModule } from '@angular/core';
import { InvoicesChartComponent } from '@application/components/invoices-chart/invoices-chart.component';
import { MrrChartComponent } from '@application/components/mrr-chart/mrr-chart.component';
import { PerformanceChartComponent } from '@application/components/performance-chart/performance-chart.component';
import { ProjectsOverviewChartComponent } from '@application/components/projects-overview-chart/projects-overview-chart.component';
import { SatisfactionChartComponent } from '@application/components/satisfaction-chart/satisfaction-chart.component';
import { SignaturesChartComponent } from '@application/components/signatures-chart/signatures-chart.component';
import { SmartTableComponent } from '@application/components/smart-table/smart-table.component';
import { TicketsChartComponent } from '@application/components/tickets-chart/tickets-chart.component';
import { BlankLayout, MainLayout } from '@application/pages';
import { GlobalModule } from '../utilities/global.module';

@NgModule({
	declarations: [
		BlankLayout,
		InvoicesChartComponent,
		MainLayout,
		MrrChartComponent,
		PerformanceChartComponent,
		ProjectsOverviewChartComponent,
		SatisfactionChartComponent,
		SmartTableComponent,
		SignaturesChartComponent,
		TicketsChartComponent
	],
	exports: [
		BlankLayout,
		GlobalModule,
		InvoicesChartComponent,
		MainLayout,
		MrrChartComponent,
		PerformanceChartComponent,
		ProjectsOverviewChartComponent,
		SatisfactionChartComponent,
		SmartTableComponent,
		SignaturesChartComponent,
		TicketsChartComponent
	],
	imports: [GlobalModule]
})
export class CorePublicModule {}
