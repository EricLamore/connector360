import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-tickets-chart',
	templateUrl: './tickets-chart.component.html'
})
export class TicketsChartComponent implements OnInit {
	@Input() public ticketsChartData: ChartDataSets[];
	@Input() public ticketsChartLabels: Label[];
	public ticketsChartLegend: boolean;
	public ticketsChartOptions: ChartOptions;
	public ticketsChartType: ChartType;

	public ngOnInit(): void {
		this.ticketsChartType = 'bar';
		this.ticketsChartLegend = false;
		this.ticketsChartOptions = {
			responsive: true,
			// We use these empty structures as placeholders for dynamic theming.
			scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
			plugins: {
				datalabels: {
					anchor: 'end',
					align: 'end'
				}
			}
		};
	}
}
