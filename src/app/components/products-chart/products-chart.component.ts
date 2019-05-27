import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { ProductService } from '@application/services/product.service';
import { ProductsViewModel } from '@application/view-models/products-view-model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-products-chart',
	templateUrl: './products-chart.component.html'
})
export class ProductsChartComponent implements OnInit {
	public chartType: string;
	public colors: Color[];
	@Input() public customerName: string;
	public dataAvailable: boolean;
	public datasets: ChartDataSets[];
	public labels: Label[];
	public legend: boolean;
	public options: ChartOptions;

	public constructor(private readonly _REF: ChangeDetectorRef, private readonly _PRODUCT_SERVICE: ProductService) {}

	public ngOnInit(): void {
		this.dataAvailable = false;

		const PRODUCT_PROMISE: Promise<ProductsViewModel> = !this.customerName
			? this._PRODUCT_SERVICE.getProducts()
			: this._PRODUCT_SERVICE.getProductsByClient(this.customerName);

		PRODUCT_PROMISE.then((products: ProductsViewModel) => {
			this.chartType = 'line';
			this.colors = [
				{
					backgroundColor: UniversignColorStates.INFO,
					borderColor: UniversignColorStates.INFO,
					pointBackgroundColor: UniversignColorStates.INFO,
					pointBorderColor: '#ffffff',
					pointHoverBackgroundColor: '#ffffff',
					pointHoverBorderColor: 'rgba(77,83,96,1)'
				}
			];
			this.datasets = products.datasets;
			this.labels = products.labels;
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
		}).catch((err: Error): void => {
			throw err;
		});
	}
}
