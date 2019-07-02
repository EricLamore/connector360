import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IProductsModel } from '@application/models/i-products';
import { TicketsService } from '@application/services/tickets.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {Color, Label} from 'ng2-charts';
import UniversignColorStates from '@application/enums/universign-color-states';

@Component({
	selector: 'app-tickets-chart',
	templateUrl: './tickets-chart.component.html'
})
export class TicketsChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: ChartType;
	public colors: Color[];
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _TICKETS_SERVICE: TicketsService) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		this._TICKETS_SERVICE
			.getTickets()
			.then((res: IProductsModel) => {
				this.chartType = 'bar';
				this.colors = [
					{
						backgroundColor: UniversignColorStates.REALISED
					},
					{
						backgroundColor: UniversignColorStates.PLANIFIED
					}
				];
				this.datasets = res.datasets;
				this.labels = res.labels;
				this.legend = false;
				this.options = {
					responsive: true,
					// We use these empty structures as placeholders for dynamic theming.
					scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
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
