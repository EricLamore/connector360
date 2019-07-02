import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import UniversignColorStates from '@application/enums/universign-color-states';
import { IProjectsOverviewModel } from '@application/models/i-projects-overview';
import { ProjectsOverviewService } from '@application/services/projects-overview.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-projects-overview-chart',
	templateUrl: './projects-overview-chart.component.html'
})
export class ProjectsOverviewChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: string;
	public colors: Color[];
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
			.getProjectsOverview()
			.then((res: IProjectsOverviewModel) => {
				this.chartType = 'horizontalBar';
				this.colors = [
					{
						backgroundColor: UniversignColorStates.REALISED
					}
				];
				this.datasets = res.datasets;
				this.labels = res.labels;
				this.legend = false;
				this.options = {
					responsive: true,
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
