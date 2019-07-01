import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-projects-overview-chart',
	templateUrl: './projects-overview-chart.component.html'
})
export class ProjectsOverviewChartComponent implements OnInit {
	@Input() public projectsOverviewChartData: ChartDataSets[];
	public projectsOverviewChartLabels: Label[];
	public projectsOverviewChartLegend: boolean;
	public projectsOverviewChartType: ChartType;
	public projectsOverviewChartOptions: ChartOptions;

	public ngOnInit(): void {
		this.projectsOverviewChartType = 'horizontalBar';
		this.projectsOverviewChartLegend = false;
		this.projectsOverviewChartLabels = ['Recette', 'Production', 'En service', 'Arrêté'];
		this.projectsOverviewChartOptions = {
			responsive: true,
			// We use these empty structures as placeholders for dynamic theming.
			scales: { xAxes: [{}], yAxes: [{}] },
			plugins: {
				datalabels: {
					anchor: 'end',
					align: 'end'
				}
			}
		};
	}
}
