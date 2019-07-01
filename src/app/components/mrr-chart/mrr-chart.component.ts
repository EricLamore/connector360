import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-mrr-chart',
	templateUrl: './mrr-chart.component.html'
})
export class MrrChartComponent implements OnInit {
	@Input() public mrrChartData: ChartDataSets[];
	@Input() public mrrChartLabels: Label[];
	public mrrChartLegend: boolean;
	public mrrChartOptions: ChartOptions;
	public mrrChartType: string;

	public ngOnInit(): void {
		this.mrrChartType = 'line';
		this.mrrChartLegend = true;
		this.mrrChartOptions = {
			responsive: true,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			},
			elements: {
				line: {
					tension: 0,
					fill: false
				}
			}
		};
	}
}
