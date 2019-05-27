import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { MonthService } from '@application/services/month.service';
import { MrrService } from '@features/global-reporting/dashboard/services/mrr.service';
import { MrrViewModel } from '@features/global-reporting/dashboard/view-models/mrr-view-model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-mrr-chart',
	templateUrl: './mrr-chart.component.html'
})
export class MrrChartComponent implements OnInit {
	public chartType: string;
	public colors: Color[];
	public dataAvailable: boolean;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(
		private readonly _MONTH_SERVICE: MonthService,
		private readonly _MRR_SERVICE: MrrService,
		private readonly _REF: ChangeDetectorRef
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._MRR_SERVICE
			.getMRR()
			.then((mrr: MrrViewModel[]) => {
				this.chartType = 'line';
				this.colors = [
					{
						backgroundColor: UniversignColorStates.OK,
						borderColor: UniversignColorStates.OK,
						pointBackgroundColor: UniversignColorStates.OK,
						pointBorderColor: '#ffffff',
						pointHoverBackgroundColor: '#ffffff',
						pointHoverBorderColor: 'rgba(148,159,177,0.8)'
					},
					{
						backgroundColor: UniversignColorStates.INFO,
						borderColor: UniversignColorStates.INFO,
						pointBackgroundColor: UniversignColorStates.INFO,
						pointBorderColor: '#ffffff',
						pointHoverBackgroundColor: '#ffffff',
						pointHoverBorderColor: 'rgba(77,83,96,1)'
					}
				];
				this.datasets = mrr;
				this.labels = this._MONTH_SERVICE.getMonths();
				this.legend = true;
				this.options = {
					responsive: true,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true
								}
							}
						]
					},
					elements: {
						line: {
							tension: 0,
							fill: false
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
