import { NgModule } from '@angular/core';
import { InvoicesChartComponent } from '@application/components/invoices-chart/invoices-chart.component';
import { MrrChartComponent } from '@application/components/mrr-chart/mrr-chart.component';
import { PerformanceChartComponent } from '@application/components/performance-chart/performance-chart.component';
import { ProductsChartComponent } from '@application/components/products-chart/products-chart.component';
import { ProjectsOverviewChartComponent } from '@application/components/projects-overview-chart/projects-overview-chart.component';
import { ProjectsTimelineChartComponent } from '@application/components/projects-timeline-chart/projects-timeline-chart.component';
import { SatisfactionCircleChartComponent } from '@application/components/satisfaction-circle-chart/satisfaction-circle-chart.component';
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
		ProjectsTimelineChartComponent,
		SatisfactionCircleChartComponent,
		SmartTableComponent,
		ProductsChartComponent,
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
		ProjectsTimelineChartComponent,
		SatisfactionCircleChartComponent,
		SmartTableComponent,
		ProductsChartComponent,
		TicketsChartComponent
	],
	imports: [GlobalModule]
})
export class CorePublicModule {}
