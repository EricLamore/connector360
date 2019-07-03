import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { ITicketsModel } from '@application/models/i-tickets';
import { TicketsService } from '@application/services/tickets.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-tickets-chart',
	templateUrl: './tickets-chart.component.html'
})
export class TicketsChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: string;
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
			.then((tickets: ITicketsModel) => {
				this.chartType = 'bar';
				this.colors = [
					{
						backgroundColor: UniversignColorStates.WARNING
					},
					{
						backgroundColor: UniversignColorStates.OK
					}
				];
				this.datasets = tickets.datasets;
				this.labels = tickets.labels;
				this.legend = false;
				this.options = {
					responsive: true,
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
			.catch((err: Error): void => {
				throw err;
			});
	}
}
