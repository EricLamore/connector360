import { Component } from '@angular/core';
import { ChartColor, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
	selector: 'app-performance-gauge-chart',
	templateUrl: './performance-gauge-chart.component.html'
})

// tslint:disable:no-magic-numbers
export class PerformanceGaugeChartComponent {
	// tslint:disable-next-line:no-any
	public colors: any = [
		{
			borderColor: 'black',
			backgroundColor: 'purple',
			pointBackgroundColor: 'orange',
			pointBorderColor: 'blue,'
		}
	];
	public opts: ChartOptions = {
		rotation: Math.PI * 1,
		circumference: Math.PI * 1
	};
	public performanceChartData: MultiDataSet = [[2, 10]];
	public performanceChartLabels: Label[] = ['Satisfaction', 'Non satisfaction'];
	public performanceChartLegend: boolean = false;
	public performanceChartType: ChartType = 'doughnut';
}
