// tslint:disable:no-big-function no-magic-numbers
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import ProjectsTimelineStates from '@features/global-reporting/dashboard/enums/projects-timeline-states';
import * as Highcharts from 'highcharts';
import factory from 'highcharts/modules/bullet';

factory(Highcharts);

@Component({
	selector: 'app-satisfaction-chart',
	templateUrl: './satisfaction-chart.component.html'
})
export class SatisfactionChartComponent implements OnInit {
	public constructor(private readonly _REF: ChangeDetectorRef) {}

	public ngOnInit(): void {
		this.buildSatisfactions();
	}

	public buildSatisfactions(): void {
		Highcharts.chart('satisfaction-chart', {
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
}
