import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-products-chart',
	templateUrl: './products-chart.component.html'
})
export class ProductsChartComponent implements OnInit {
	@Input() public datasets: ChartDataSets[];
	@Input() public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;
	public chartType: string;

	public ngOnInit(): void {
		this.chartType = 'line';
		this.legend = true;
		this.options = {
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
