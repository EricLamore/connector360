// tslint:disable:no-big-function no-magic-numbers
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import ProjectsTimelineStates from '@features/global-reporting/dashboard/enums/projects-timeline-states';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as Highcharts from 'highcharts';
import Timeline from 'highcharts/modules/timeline';
import { Label } from 'ng2-charts';

Timeline(Highcharts);

@Component({
	selector: 'app-projects-timeline-chart',
	templateUrl: './projects-timeline-chart.component.html'
})
export class ProjectsTimelineChartComponent implements OnInit {
	public constructor(private readonly _REF: ChangeDetectorRef) {}

	public ngOnInit(): void {
		this.buildProjects();
	}

	public buildProjects(): void {
		Highcharts.chart('projects-timeline-chart', {
			chart: {
				zoomType: 'x',
				type: 'timeline',
				scrollablePlotArea: {
					minWidth: 800,
					scrollPositionX: 1
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
					data: [
						{
							x: Date.UTC(2018, 11, 10),
							name: 'Assurance rouge IARD',
							label: 'Assurance rouge IARD',
							description: 'Assurance Rouge',
							color: ProjectsTimelineStates.RISKS,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.RISKS,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.RISKS
							}
						},
						{
							x: Date.UTC(2018, 11, 15),
							name: 'AFTA ITALY',
							label: 'AFTA ITALY',
							description: 'AFTA',
							color: ProjectsTimelineStates.WARNING,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.WARNING,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.WARNING
							}
						},
						{
							x: Date.UTC(2018, 11, 16),
							name: 'Fin.Brousouf sous VIE',
							label: 'Fin.Brousouf sous VIE',
							description: 'Fin. Brousouf',
							color: ProjectsTimelineStates.RISKS,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.RISKS,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.RISKS
							}
						},
						{
							x: Date.UTC(2019, 0, 1),
							name: 'xxx xx',
							label: 'xxx xx',
							description: 'xxx',
							color: ProjectsTimelineStates.OK,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.OK,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.OK
							}
						},
						{
							x: Date.UTC(2019, 0, 2),
							name: 'yyy yy',
							label: 'yyy yy',
							description: 'yyy',
							color: ProjectsTimelineStates.DIFFICULTIES,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.DIFFICULTIES,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.DIFFICULTIES
							}
						},
						{
							x: Date.UTC(2019, 0, 20),
							name: 'Mutuelle Risk Business',
							label: 'Mutuelle Risk Business',
							description: 'Mutuelle Bleue',
							color: ProjectsTimelineStates.OK,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.OK,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.OK
							}
						}
					]
				}
			]
		});
	}
}
