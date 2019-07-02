import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IProductsModel } from '@application/models/i-products';
import { ProductsService } from '@application/services/products.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-products-chart',
	templateUrl: './products-chart.component.html'
})
export class ProductsChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: string;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _PRODUCTS_SERVICE: ProductsService) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		this._PRODUCTS_SERVICE
			.get()
			.then((res: IProductsModel) => {
				this.labels = res.labels;
				this.datasets = res.datasets;
				this.chartType = 'line';
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
