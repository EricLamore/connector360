import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IInvoicesModel } from '@application/models/i-invoices';
import { InvoicesService } from '@application/services/invoices.service';
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

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _INVOICES_SERVICE: InvoicesService) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		this._INVOICES_SERVICE
			.getInvoices()
			.then((res: IInvoicesModel) => {
				this.chartType = 'horizontalBar';
				this.datasets = res.datasets;
				this.labels = res.labels;
				this.legend = false;
				this.options = {
					responsive: true,
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
			.catch(
				(err: Error): void => {
					throw err;
				}
			);
	}
}
