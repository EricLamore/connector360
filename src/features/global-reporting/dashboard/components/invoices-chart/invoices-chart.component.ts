import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InvoiceService } from '@features/global-reporting/dashboard/services/invoice.service';
import { InvoicesViewModel } from '@features/global-reporting/dashboard/view-models/invoices-view-model';
import { ChartData, ChartDataSets, ChartOptions, ChartTooltipItem } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-invoices-chart',
	templateUrl: './invoices-chart.component.html'
})
export class InvoicesChartComponent implements OnInit {
	public chartType: string;
	public dataAvailable: boolean;
	public datasets: ChartDataSets[][];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _INVOICE_SERVICE: InvoiceService, private readonly _REF: ChangeDetectorRef) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._INVOICE_SERVICE
			.getInvoices()
			.then((invoices: InvoicesViewModel) => {
				this.chartType = 'horizontalBar';
				this.datasets = invoices.datasets;
				this.labels = invoices.labels;
				this.legend = false;
				this.options = {
					responsive: true,
					scales: {
						xAxes: [
							{
								ticks: {
									beginAtZero: true
								}
							}
						],
						yAxes: [
							{
								ticks: {
									fontFamily: 'Courier New'
								}
							}
						]
					},
					plugins: {
						datalabels: {
							anchor: 'end',
							align: 'end'
						}
					},
					tooltips: {
						mode: 'nearest',
						callbacks: {
							label: (tooltipItem: ChartTooltipItem, data: ChartData): string[] =>
								data.datasets[tooltipItem.datasetIndex].label.split('|')
						},
						borderWidth: 1,
						borderColor: 'black',
						titleMarginBottom: -10,
						titleFontColor: 'white',
						bodyFontColor: 'black',
						backgroundColor: 'white'
					},
					hover: {
						mode: 'nearest',
						intersect: true
					}
				};
				this.dataAvailable = true;
				this._REF.detectChanges();
			})
			.catch((err: Error): void => {
				throw err;
			});
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
