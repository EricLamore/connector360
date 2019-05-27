import { NgModule } from '@angular/core';
import { CategoryTableComponent } from '@application/components/category-table/category-table.component';
import { DetailsButtonComponent } from '@application/components/details-button/details-button.component';
import { FourOhFourComponent } from '@application/components/four-oh-four/four-oh-four.component';
import { ProductsChartComponent } from '@application/components/products-chart/products-chart.component';
import { SmartTableComponent } from '@application/components/smart-table/smart-table.component';
import { TicketsChartComponent } from '@application/components/tickets-chart/tickets-chart.component';
import { BlankLayout, MainLayout } from '@application/pages';
import { GlobalModule } from '../utilities/global.module';

@NgModule({
	declarations: [
		BlankLayout,
		CategoryTableComponent,
		DetailsButtonComponent,
		FourOhFourComponent,
		MainLayout,
		ProductsChartComponent,
		SmartTableComponent,
		TicketsChartComponent
	],
	exports: [
		BlankLayout,
		CategoryTableComponent,
		DetailsButtonComponent,
		FourOhFourComponent,
		GlobalModule,
		MainLayout,
		ProductsChartComponent,
		SmartTableComponent,
		TicketsChartComponent
	],
	imports: [GlobalModule]
})
export class CorePublicModule {}
