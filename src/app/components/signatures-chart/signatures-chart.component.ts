import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-signatures-chart',
	templateUrl: './signatures-chart.component.html'
})
export class SignaturesChartComponent implements OnInit {
	@Input() public signaturesChartData: ChartDataSets[];
	@Input() public signaturesChartLabels: Label[];
	public signaturesChartLegend: boolean;
	public signaturesChartOptions: ChartOptions;
	public signaturesChartType: string;

	public ngOnInit(): void {
		this.signaturesChartType = 'line';
		this.signaturesChartLegend = true;
		this.signaturesChartOptions = {
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
	}
}
