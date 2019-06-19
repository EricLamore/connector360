import { NgModule } from '@angular/core';
import { PerformanceChartComponent } from '@application/components/performance-chart/performance-chart.component';
import { SatisfactionChartComponent } from '@application/components/satisfaction-chart/satisfaction-chart.component';
import { SignaturesChartComponent } from '@application/components/signatures-chart/signatures-chart.component';
import { SmartTableComponent } from '@application/components/smart-table/smart-table.component';
import { TicketsChartComponent } from '@application/components/tickets-chart/tickets-chart.component';
import { BlankLayout, MainLayout } from '@application/pages';
import { GlobalModule } from '../utilities/global.module';

@NgModule({
	declarations: [
		BlankLayout,
		MainLayout,
		PerformanceChartComponent,
		SatisfactionChartComponent,
		SmartTableComponent,
		SignaturesChartComponent,
		TicketsChartComponent
	],
	exports: [
		BlankLayout,
		GlobalModule,
		MainLayout,
		PerformanceChartComponent,
		SatisfactionChartComponent,
		SmartTableComponent,
		SignaturesChartComponent,
		TicketsChartComponent
	],
	imports: [GlobalModule]
})
export class CorePublicModule {}
