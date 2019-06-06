import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-signature-line-chart',
	templateUrl: './signature-line-chart.component.html'
})

// tslint:disable:no-magic-numbers
export class SignatureLineChartComponent {
	public lineChartData: ChartDataSets[] = [{ data: [1200000, 1400000, 2200000, 1000000], label: 'Signatures' }];

	public lineChartLabels: Label[] = ['Octobre', 'Novembre', 'Décembre', 'Janvier'];
	public lineChartLegend: boolean = true;
	public lineChartOption: ChartOptions = {
		responsive: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	};
	public lineChartType: string = 'line';
}
