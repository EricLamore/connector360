import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
	selector: 'app-projects-overview-chart',
	template: ''
})
export class ProjectsOverviewChartStubComponent {
	@Input() public projectsOverviewChartData: ChartDataSets[];
}
