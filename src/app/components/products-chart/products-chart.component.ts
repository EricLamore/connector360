import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import UniversignColorStates from '@application/enums/universign-color-states';
import { IProductsModel } from '@application/models/i-products';
import { ProductsService } from '@application/services/products.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-products-chart',
	templateUrl: './products-chart.component.html'
})
export class ProductsChartComponent implements OnInit {
	public areDataAvailable: boolean;
	public chartType: string;
	public colors: Color[];
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _PRODUCTS_SERVICE: ProductsService) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		this._PRODUCTS_SERVICE
			.getProducts()
			.then((res: IProductsModel) => {
				this.chartType = 'line';
				this.colors = [
					{
						backgroundColor: UniversignColorStates.REALISED,
						borderColor: UniversignColorStates.REALISED,
						pointBackgroundColor: UniversignColorStates.REALISED,
						pointBorderColor: '#ffffff',
						pointHoverBackgroundColor: '#ffffff',
						pointHoverBorderColor: 'rgba(77,83,96,1)'
					}
				];
				this.datasets = res.datasets;
				this.labels = res.labels;
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
			.catch((err: Error): void => {
				throw err;
			});
	}
}
