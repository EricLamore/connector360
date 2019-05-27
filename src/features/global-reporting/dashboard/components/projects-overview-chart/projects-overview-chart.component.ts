import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { ProjectOverviewService } from '@features/global-reporting/dashboard/services/project-overview.service';
import { ProjectOverviewViewModel } from '@features/global-reporting/dashboard/view-models/project-overview-view-model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-projects-overview-chart',
	templateUrl: './projects-overview-chart.component.html'
})
export class ProjectsOverviewChartComponent implements OnInit {
	public chartType: string;
	public colors: Color[];
	public dataAvailable: boolean;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(
		private readonly _PROJECT_OVERVIEW_SERVICE: ProjectOverviewService,
		private readonly _REF: ChangeDetectorRef
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._PROJECT_OVERVIEW_SERVICE
			.getProjectsOverview()
			.then((projectsOverview: ProjectOverviewViewModel) => {
				this.chartType = 'horizontalBar';
				this.colors = [
					{
						backgroundColor: UniversignColorStates.INFO
					}
				];
				this.datasets = projectsOverview.datasets;
				this.labels = projectsOverview.labels;
				this.legend = false;
				this.options = {
					responsive: true,
					maintainAspectRatio: false,
					scales: { xAxes: [{}], yAxes: [{}] },
					plugins: {
						datalabels: {
							anchor: 'end',
							align: 'end'
						}
					}
				};
				this.dataAvailable = true;
				this._REF.detectChanges();
			})
			.catch((err: Error): void => {
				throw err;
			});
	}
}
