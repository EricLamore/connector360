// tslint:disable:max-file-line-count no-big-function no-magic-numbers
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProjectsTimelineStates from '@features/global-reporting/dashboard/enums/projects-timeline-states';
import * as Highcharts from 'highcharts';
import factory from 'highcharts/modules/bullet';
import { MultiDataSet } from 'ng2-charts';

factory(Highcharts);

@Component({
	templateUrl: './global-reporting-dashboard.page.html'
})
export class GlobalReportingDashboardPage implements OnInit {
	public performanceChartData: MultiDataSet;
	public performanceChartMiddleText: string;

	public constructor(private readonly _ROUTER: Router) {}

	public ngOnInit(): void {
		this.performanceChartData = [[25, 75]];
		this.performanceChartMiddleText = '-10%';

		this.buildSatisfactions();
	}

	public buildSatisfactions(): void {
		Highcharts.chart('app-satisfaction-chart', {
			chart: {
				inverted: true,
				type: 'bullet',
				height: 115
			},
			title: {
				text: null
			},
			legend: {
				enabled: false
			},
			xAxis: {
				categories: ['<span class="hc-cat-title"></span><br/>']
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					color: '#000'
				},
				bullet: {
					pointPadding: 0.25,
					targetOptions: {
						width: '200%'
					}
				}
			},
			yAxis: {
				gridLineWidth: 1,
				plotBands: [
					{
						from: 0,
						to: 50,
						color: ProjectsTimelineStates.RISKS
					},
					{
						from: 50,
						to: 75,
						color: ProjectsTimelineStates.DIFFICULTIES
					},
					{
						from: 75,
						to: 90,
						color: ProjectsTimelineStates.WARNING
					},
					{
						from: 90,
						to: 100,
						color: ProjectsTimelineStates.OK
					}
				],
				title: {
					text: 'Satisfaction'
				}
			},
			tooltip: {
				pointFormat: '<b>{point.y}</b> (with target at {point.target})'
			},
			credits: {
				enabled: false
			},
			series: [
				{
					type: undefined,
					data: [
						{
							y: 90,
							target: 95
						}
					]
				}
			]
		});
	}

	public goToClientInvoices(client: string): void {
		this._ROUTER.navigate([`/global-reporting/invoices/${client}`]);
	}

	public goToClientProjects(client: string): void {
		this._ROUTER.navigate([`/global-reporting/projects/${client}`]);
	}
}
