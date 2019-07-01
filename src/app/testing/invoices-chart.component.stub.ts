import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-invoices-chart',
	template: ''
})
export class InvoicesChartStubComponent {
	@Input() public invoicesChartData: ChartDataSets[];
	@Input() public invoicesChartLabels: Label[];
}