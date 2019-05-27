// tslint:disable:no-magic-numbers
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectTimelineService } from '@features/global-reporting/dashboard/services/project-timeline.service';
import { ProjectTimelineViewModel } from '@features/global-reporting/dashboard/view-models/project-timeline-view-model';
import * as Highcharts from 'highcharts';
import Timeline from 'highcharts/modules/timeline';
Timeline(Highcharts);

@Component({
	selector: 'app-projects-timeline-chart',
	templateUrl: './projects-timeline-chart.component.html'
})
export class ProjectsTimelineChartComponent implements OnInit {
	public dataAvailable: boolean;
	public constructor(
		private readonly _PROJECT_TIMELINE_SERVICE: ProjectTimelineService,
		private readonly _REF: ChangeDetectorRef
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._PROJECT_TIMELINE_SERVICE
			.getProjectsTimeline()
			.then((projects: ProjectTimelineViewModel[]) => {
				this.dataAvailable = true;
				this._REF.detectChanges();
				Highcharts.chart('projects-timeline-chart', {
					chart: {
						zoomType: 'x',
						type: 'timeline',
						scrollablePlotArea: {
							minWidth: projects.length * 300,
							scrollPositionX: 0
						},
						marginRight: 0,
						marginLeft: 10
					},
					title: {
						text: 'Timeline'
					},
					xAxis: {
						type: 'datetime',
						visible: true
					},
					yAxis: {
						gridLineWidth: 1,
						title: null,
						labels: {
							enabled: false
						}
					},
					tooltip: {
						style: {
							width: 300
						}
					},
					credits: {
						enabled: false
					},
					series: [
						{
							dataLabels: {
								allowOverlap: false,
								width: 50,
								format: '<span style="font-weight: bold;" > {point.x:%d %b %Y}</span><br/>{point.label}'
							},
							type: undefined,
							marker: {
								symbol: 'circle'
							},
							data: projects
						}
					]
				});
			})
			.catch((err: Error): void => {
				throw err;
			});
	}
}
