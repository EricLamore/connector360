import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IInvoiceModel } from '@application/models/i-invoice';
import { InvoiceService } from '@application/services/invoice.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-invoices-chart',
	templateUrl: './invoices-chart.component.html'
})
export class InvoicesChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: string;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _INVOICE_SERVICE: InvoiceService) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		this._INVOICE_SERVICE
			.getInvoices()
			.then((invoices: IInvoiceModel[]) => {
				this.chartType = 'horizontalBar';
				this.datasets = invoices;
				this.labels = ['Décembre 2018'];
				this.legend = false;
				this.options = {
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						xAxes: [{}],
						yAxes: [{}]
					},
					plugins: {
						datalabels: {
							anchor: 'end',
							align: 'end'
						}
					},
					tooltips: {
						mode: 'nearest'
					},
					hover: {
						mode: 'nearest',
						intersect: true
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
