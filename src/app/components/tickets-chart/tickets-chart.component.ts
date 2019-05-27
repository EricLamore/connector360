import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { TicketService } from '@application/services/ticket.service';
import { TicketsViewModel } from '@application/view-models/tickets-view-model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-tickets-chart',
	templateUrl: './tickets-chart.component.html'
})
export class TicketsChartComponent implements OnInit {
	public chartType: string;
	public colors: Color[];
	@Input() public customerName: string;
	public dataAvailable: boolean;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _TICKET_SERVICE: TicketService) {}

	public ngOnInit(): void {
		this.dataAvailable = false;

		const TICKET_PROMISE: Promise<TicketsViewModel> = !this.customerName
			? this._TICKET_SERVICE.getTickets()
			: this._TICKET_SERVICE.getTicketsByClient(this.customerName);

		TICKET_PROMISE.then((tickets: TicketsViewModel) => {
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
				maintainAspectRatio: false,
				scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
				plugins: {
					datalabels: {
						anchor: 'end',
						align: 'end'
					}
				},
				tooltips: {
					borderWidth: 1,
					borderColor: 'black',
					titleMarginBottom: -10,
					titleFontColor: 'white',
					bodyFontColor: 'black',
					backgroundColor: 'white'
				}
			};
			this.dataAvailable = true;
			this._REF.detectChanges();
		}).catch((err: Error): void => {
			throw err;
		});
	}
}
