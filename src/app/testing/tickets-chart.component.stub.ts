import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-tickets-chart',
	template: ''
})
export class TicketsChartStubComponent {
	@Input() public ticketsChartData: ChartDataSets[];
	@Input() public ticketsChartLabels: Label[];
}
