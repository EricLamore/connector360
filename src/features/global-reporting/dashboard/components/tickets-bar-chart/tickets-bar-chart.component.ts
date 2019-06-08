import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-tickets-bar-chart',
	templateUrl: './tickets-bar-chart.component.html'
})

// tslint:disable:no-magic-numbers
export class TicketsBarChartComponent {
	public barChartData: ChartDataSets[] = [
		{ data: [2, 2, 10, 1, 11], label: 'Negatif' },
		{ data: [70, 56, 80, 34, 89], label: 'Positif' }
	];
	public barChartLabels: Label[] = ['Septembre', 'Octobre', 'Novembre', 'Decembre', 'Janvier'];
	public barChartLegend: boolean = false;
	public barChartOptions: ChartOptions = {
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
	public barChartType: ChartType = 'bar';
}
