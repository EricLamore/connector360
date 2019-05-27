// tslint:disable:no-magic-numbers
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SATISFACTION_AREA } from '@application/constants/constants';
import { SatisfactionService } from '@features/global-reporting/dashboard/services/satisfaction.service';
import { SatisfactionViewModel } from '@features/global-reporting/dashboard/view-models/satisfaction-view-model';
import * as Highcharts from 'highcharts';
import factory from 'highcharts/modules/bullet';
factory(Highcharts);

@Component({
	selector: 'app-satisfaction-chart',
	templateUrl: './satisfaction-chart.component.html'
})
export class SatisfactionChartComponent implements OnInit {
	public dataAvailable: boolean;

	public constructor(
		private readonly _REF: ChangeDetectorRef,
		private readonly _SATISFACTION_SERVICE: SatisfactionService
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._SATISFACTION_SERVICE
			.getSatisfaction()
			.then((satisfaction: SatisfactionViewModel[]) => {
				this.dataAvailable = true;
				this._REF.detectChanges();
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
						plotBands: SATISFACTION_AREA,
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
							data: satisfaction
						}
					]
				});
			})
			.catch((err: Error): void => {
				throw err;
			});
	}
}
