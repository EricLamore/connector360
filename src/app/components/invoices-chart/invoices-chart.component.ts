import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-invoices-chart',
	templateUrl: './invoices-chart.component.html'
})
export class InvoicesChartComponent implements OnInit {
	@Input() public invoicesChartData: ChartDataSets[];
	@Input() public invoicesChartLabels: Label[];
	public invoicesChartLegend: boolean;
	public invoicesChartType: ChartType;
	public invoicesChartOptions: ChartOptions;

	public ngOnInit(): void {
		this.invoicesChartType = 'horizontalBar';
		this.invoicesChartLegend = false;
		this.invoicesChartOptions = {
			responsive: true,
			// We use these empty structures as placeholders for dynamic theming.
			scales: {
				xAxes: [{}],
				yAxes: [
					{
						type: 'time',
						time: {
							unit: 'month'
						}
					}
				]
			},
			plugins: {
				datalabels: {
					anchor: 'end',
					align: 'end'
				}
			}
		};
	}
}
