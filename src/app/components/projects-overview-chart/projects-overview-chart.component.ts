import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IProjectsOverviewModel } from '@application/models/i-projects-overview';
import { ProjectsOverviewService } from '@application/services/projects-overview.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-projects-overview-chart',
	templateUrl: './projects-overview-chart.component.html'
})
export class ProjectsOverviewChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: ChartType;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(
		private readonly _REF: ChangeDetectorRef,
		private readonly _PROJECTS_OVERVIEW_SERVICE: ProjectsOverviewService
	) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		this._PROJECTS_OVERVIEW_SERVICE
			.get()
			.then((res: IProjectsOverviewModel) => {
				this.datasets = res.datasets;
				this.labels = res.labels;
				this.chartType = 'horizontalBar';
				this.legend = false;
				this.options = {
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
				this.areDataAvailable = true;
				this._REF.detectChanges();
			})
			.catch(
				(err: Error): void => {
					throw err;
				}
			);
	}
}
