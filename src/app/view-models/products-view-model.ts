import { IProductsModel } from '@application/models/i-products';
import { ChartDataSets } from 'chart.js';

export class ProductsViewModel implements IProductsModel {
	public labels: string[];
	public datasets: ChartDataSets[];

	public constructor(data?: IProductsModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: IProductsModel): void {
		if (typeof data.labels !== 'undefined') {
			this.labels = Array.from(data.labels);
		}
		if (typeof data.datasets !== 'undefined') {
			this.datasets = Array.from(data.datasets);
		}
	}
}
